# 🍜 FoodLover - Chọn Món Ăn Cho Bé Yêu

Web app kawaii cute giúp người yêu chọn món ăn Việt Nam và gửi thông báo cho bạn!

## ✨ Features

- 🌸 **Kawaii Japanese Style** - Pastel colors, cute animations, rounded design
- 🍽️ **50+ Món Việt Nam** - 7 categories từ phở đến lẩu nướng
- 🎰 **Random Picker** - Slot machine + Dice mode
- 💌 **Email Notification** - Gửi email khi chọn xong (via EmailJS)
- 📱 **Mobile Responsive** - Tối ưu cho điện thoại
- 🎬 **GSAP Animations** - Smooth 60fps animations
- 🎉 **Confetti Effects** - Celebration khi chọn xong

## 🚀 Quick Start

1. Clone repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/FoodLover.git
   ```

2. Mở `index.html` trong browser (hoặc dùng Live Server)

3. Done! 🎉

## 📧 Setup Email Notification

### Bước 1: Tạo tài khoản EmailJS
1. Truy cập [emailjs.com](https://www.emailjs.com/) → Sign Up (miễn phí)
2. Free plan: 200 emails/tháng

### Bước 2: Tạo Email Service
1. Dashboard → Email Services → Add New Service
2. Chọn Gmail → Connect Account
3. Copy **Service ID** (VD: `service_abc123`)

### Bước 3: Tạo Email Template
1. Dashboard → Email Templates → Create New Template
2. Template content:
   ```
   Subject: 🍜 Bé Yêu muốn ăn {{food_name}}!

   Hi anh!

   Bé Yêu đã chọn món:
   {{food_details}}

   📝 Ghi chú: {{note}}
   🕐 Thời gian: {{time}}

   Đặt đồ ăn cho em nha~ 💕
   ```
3. Copy **Template ID** (VD: `template_xyz789`)

### Bước 4: Lấy Public Key
1. Dashboard → Account → API Keys
2. Copy **Public Key** (VD: `AbCdEf123456`)

### Bước 5: Config trong code
Mở `js/notify.js` và thay 3 giá trị:
```javascript
SERVICE_ID: 'service_abc123',      // Service ID của bạn
TEMPLATE_ID: 'template_xyz789',    // Template ID của bạn
PUBLIC_KEY: 'AbCdEf123456',        // Public Key của bạn
```

## 🌐 Deploy lên GitHub Pages

1. **Push code lên GitHub:**
   ```bash
   git init
   git add .
   git commit -m "🍜 Initial FoodLover release"
   git remote add origin https://github.com/YOUR_USERNAME/FoodLover.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - GitHub repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
   - Save

3. **Chờ 1-2 phút**, truy cập:
   ```
   https://YOUR_USERNAME.github.io/FoodLover/
   ```

4. **Gửi link cho người yêu!** 💕

## 🎨 Customize

### Đổi tên hiển thị
Tìm "Bé Yêu" trong `index.html` và thay bằng tên bạn muốn.

### Thêm/sửa món ăn
Edit file `js/foods.js` - thêm object mới vào array `FOODS`.

### Đổi màu sắc
Edit CSS variables trong `css/index.css` (phần `:root`).

## 📁 Project Structure

```
FoodLover/
├── index.html          # Main page
├── css/
│   ├── index.css       # Design system
│   ├── animations.css  # Keyframe animations
│   ├── components.css  # Component styles
│   └── responsive.css  # Mobile responsive
├── js/
│   ├── app.js          # Main app logic
│   ├── foods.js        # Food data (52 items)
│   ├── animations.js   # GSAP animation controllers
│   ├── random.js       # Random picker (slot + dice)
│   └── notify.js       # EmailJS notification
├── assets/
│   └── images/
│       └── mascot.png  # Kawaii cat chef mascot
└── README.md
```

## 🛡️ Bảo mật

- EmailJS dùng **Public Key** (không phải mật khẩu)
- Không ai có thể đọc email hoặc truy cập Gmail của bạn
- Free tier giới hạn 200 emails/tháng = chống spam tự nhiên
- Có thể thêm reCAPTCHA trong EmailJS dashboard

## 📝 License

Made with 💕 for Bé Yêu
