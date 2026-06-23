/* ============================================================
   FoodLover - Email Notification (EmailJS)
   
   EmailJS chỉ GỬI email thôi, không cần cấp quyền gì cho Gmail:
   - Dùng Public Key (không phải mật khẩu)
   - Chỉ gửi qua template đã định sẵn
   - Không đọc, không truy cập tài khoản
   ============================================================ */

const Notifier = {
  initialized: false,

  init() {
    // Read credentials from config.js
    const serviceId = CONFIG.EMAILJS_SERVICE_ID;
    const publicKey = CONFIG.EMAILJS_PUBLIC_KEY;

    // Initialize EmailJS if configured
    if (typeof emailjs !== 'undefined' && publicKey && publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(publicKey);
      this.initialized = true;
      console.log('📧 EmailJS initialized! Email notification đã sẵn sàng.');
    } else if (!publicKey || publicKey === 'YOUR_PUBLIC_KEY') {
      console.warn(
        '⚠️ EmailJS chưa được config!\n' +
        '📝 Mở file js/config.js và điền:\n' +
        '   - EMAILJS_SERVICE_ID\n' +
        '   - EMAILJS_TEMPLATE_ID\n' +
        '   - EMAILJS_PUBLIC_KEY\n' +
        '📖 Xem hướng dẫn chi tiết trong config.js hoặc README.md'
      );
    }
  },

  /**
   * Send notification email
   * @param {Object} data - { foods: [{name, emoji, desc}], note: string }
   * @returns {Promise<boolean>}
   */
  async send(data) {
    const { foods, note } = data;

    // Format food list
    const foodList = foods.map(f => `${f.emoji} ${f.name}`).join(', ');
    const foodListDetailed = foods.map(f => `${f.emoji} ${f.name} - ${f.desc}`).join('\n');

    // Current time
    const now = new Date();
    const timeStr = now.toLocaleString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const templateParams = {
      food_name: foodList,
      food_details: foodListDetailed,
      food_count: foods.length,
      note: note || 'Không có ghi chú~',
      time: timeStr,
      message: `${CONFIG.PARTNER_NAME} muốn ăn: ${foodList}`,
    };

    // If EmailJS is not configured, use demo mode
    if (!this.initialized) {
      console.log('📧 [Demo Mode] Email sẽ được gửi với nội dung:');
      this.showDemoNotification(templateParams);
      return true; // Return true so the success screen still shows
    }

    // Send email via EmailJS
    try {
      const response = await emailjs.send(
        CONFIG.EMAILJS_SERVICE_ID,
        CONFIG.EMAILJS_TEMPLATE_ID,
        templateParams
      );
      console.log('✅ Email đã gửi thành công!', response);
      return true;
    } catch (error) {
      console.error('❌ Gửi email thất bại:', error);
      return false;
    }
  },

  /**
   * Demo mode - log notification to console
   */
  showDemoNotification(params) {
    console.log('═══════════════════════════════════════');
    console.log('📧 EMAIL NOTIFICATION (Demo Mode)');
    console.log('═══════════════════════════════════════');
    console.log(`📌 Subject: 🍜 ${CONFIG.PARTNER_NAME} muốn ăn!`);
    console.log(`🍽️ Món: ${params.food_name}`);
    console.log(`📝 Ghi chú: ${params.note}`);
    console.log(`🕐 Thời gian: ${params.time}`);
    console.log('═══════════════════════════════════════');
    console.log('💡 Config EmailJS trong js/config.js để gửi email thật');
  },

  /**
   * Check if EmailJS is properly configured
   */
  isConfigured() {
    return this.initialized &&
           CONFIG.EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
           CONFIG.EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
           CONFIG.EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';
  },
};
