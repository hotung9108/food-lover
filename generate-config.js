/* ============================================================
   FoodLover - Generate config.js from .env
   
   Chạy: node generate-config.js
   
   Script này đọc file .env và tạo ra js/config.js
   để browser có thể sử dụng.
   ============================================================ */

const fs = require('fs');
const path = require('path');

// Đọc .env file
const envPath = path.join(__dirname, '.env');

if (!fs.existsSync(envPath)) {
  console.error('❌ Không tìm thấy file .env!');
  console.log('📝 Tạo file .env với nội dung:');
  console.log('   EMAILJS_SERVICE_ID=your_service_id');
  console.log('   EMAILJS_TEMPLATE_ID=your_template_id');
  console.log('   EMAILJS_PUBLIC_KEY=your_public_key');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf-8');

// Parse .env
const env = {};
envContent.split('\n').forEach(line => {
  // Skip comments and empty lines
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) return;

  const [key, ...valueParts] = trimmed.split('=');
  if (key && valueParts.length > 0) {
    env[key.trim()] = valueParts.join('=').trim();
  }
});

// Generate config.js
const configContent = `/* ============================================================
   FoodLover - Configuration (Auto-generated)
   
   ⚠️ KHÔNG EDIT FILE NÀY TRỰC TIẾP!
   Sửa file .env rồi chạy: node generate-config.js
   
   File này được .gitignore - không push lên GitHub
   ============================================================ */

const CONFIG = {
  EMAILJS_SERVICE_ID: '${env.EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'}',
  EMAILJS_TEMPLATE_ID: '${env.EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'}',
  EMAILJS_PUBLIC_KEY: '${env.EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'}',

  PARTNER_NAME: '${env.PARTNER_NAME || 'Bé Yêu'}',
  YOUR_NAME: '${env.YOUR_NAME || 'Anh'}',
};
`;

const configPath = path.join(__dirname, 'js', 'config.js');
fs.writeFileSync(configPath, configContent, 'utf-8');

console.log('✅ Đã tạo js/config.js từ .env!');
console.log('');
console.log('📋 Config hiện tại:');
console.log(`   SERVICE_ID:  ${env.EMAILJS_SERVICE_ID || '(chưa set)'}`);
console.log(`   TEMPLATE_ID: ${env.EMAILJS_TEMPLATE_ID || '(chưa set)'}`);
console.log(`   PUBLIC_KEY:  ${env.EMAILJS_PUBLIC_KEY ? '***' + env.EMAILJS_PUBLIC_KEY.slice(-4) : '(chưa set)'}`);
console.log(`   PARTNER:     ${env.PARTNER_NAME || 'Bé Yêu'}`);
console.log('');
console.log('🌐 Mở http://localhost:3456 để test!');
