/* ============================================================
   FoodLover - Vietnamese Food Data
   ============================================================ */

const CATEGORIES = [
  { id: 'all', name: 'Tất Cả', emoji: '🍽️' },
  { id: 'mon-nuoc', name: 'Món Nước', emoji: '🍜' },
  { id: 'com', name: 'Cơm', emoji: '🍚' },
  { id: 'banh', name: 'Bánh', emoji: '🥖' },
  { id: 'mon-kho', name: 'Món Khô', emoji: '🥢' },
  { id: 'an-vat', name: 'Ăn Vặt & Uống', emoji: '🧁' },
  { id: 'lau-nuong', name: 'Lẩu & Nướng', emoji: '🍲' },
  { id: 'khac', name: 'Khác', emoji: '🥗' },
];

const FOODS = [
  // ====== 🍜 MÓN NƯỚC ======
  { id: 1, name: 'Phở Bò', category: 'mon-nuoc', emoji: '🍜', desc: 'Nước dùng ngọt thanh, bánh phở mềm, thịt bò tái chín', color: '#FFE4E9' },
  { id: 2, name: 'Bún Bò Huế', category: 'mon-nuoc', emoji: '🌶️', desc: 'Cay cay đậm đà, sả ớt thơm lừng kiểu Huế', color: '#FFE4E9' },
  { id: 3, name: 'Hủ Tiếu Nam Vang', category: 'mon-nuoc', emoji: '🍜', desc: 'Nước trong ngọt, topping tôm thịt đầy đủ', color: '#FFE4E9' },
  { id: 4, name: 'Bún Riêu Cua', category: 'mon-nuoc', emoji: '🦀', desc: 'Nước chua chua, gạch cua béo ngậy, đậu hũ chiên', color: '#FFE4E9' },
  { id: 5, name: 'Canh Bún', category: 'mon-nuoc', emoji: '🍲', desc: 'Nước lèo đậm đà, rau muống, đậu hũ, huyết', color: '#FFE4E9' },
  { id: 6, name: 'Mì Quảng', category: 'mon-nuoc', emoji: '🍝', desc: 'Sợi mì vàng ươm, nước ít, bánh tráng giòn rụm', color: '#FFE4E9' },
  { id: 7, name: 'Bún Mắm', category: 'mon-nuoc', emoji: '🍲', desc: 'Nước mắm đậm vị miền Tây, hải sản tươi sống', color: '#FFE4E9' },
  { id: 8, name: 'Súp Cua', category: 'mon-nuoc', emoji: '🥣', desc: 'Súp sánh mịn, gạch cua thơm, trứng cút bé xinh', color: '#FFE4E9' },

  // ====== 🍚 CƠM ======
  { id: 9, name: 'Cơm Tấm', category: 'com', emoji: '🍚', desc: 'Sườn nướng mỡ hành, bì chả, trứng ốp la', color: '#FFF0E0' },
  { id: 10, name: 'Cơm Gà Hội An', category: 'com', emoji: '🐔', desc: 'Cơm vàng nghệ thơm, gà xé mềm, rau sống tươi', color: '#FFF0E0' },
  { id: 11, name: 'Cơm Sườn Nướng', category: 'com', emoji: '🥩', desc: 'Sườn nướng than hồng, mỡ hành thơm phức', color: '#FFF0E0' },
  { id: 12, name: 'Cơm Chiên Dương Châu', category: 'com', emoji: '🍳', desc: 'Cơm rang hạt rời, tôm lạp xưởng trứng', color: '#FFF0E0' },
  { id: 13, name: 'Cơm Rang Dưa Bò', category: 'com', emoji: '🥒', desc: 'Cơm rang thơm, bò xào dưa chua giòn sật', color: '#FFF0E0' },
  { id: 14, name: 'Cơm Gà Xối Mỡ', category: 'com', emoji: '🍗', desc: 'Gà giòn rụm xối mỡ, cơm trắng dẻo', color: '#FFF0E0' },
  { id: 15, name: 'Cơm Cuộn Rong Biển', category: 'com', emoji: '🍙', desc: 'Cơm cuộn kiểu Hàn, nhân tôm bơ phô mai', color: '#FFF0E0' },
  { id: 16, name: 'Cơm Cháy Chà Bông', category: 'com', emoji: '🍘', desc: 'Cơm cháy giòn rụm, chà bông tôm béo ngậy', color: '#FFF0E0' },

  // ====== 🥖 BÁNH ======
  { id: 17, name: 'Bánh Mì Thịt', category: 'banh', emoji: '🥖', desc: 'Bánh mì giòn, pa tê, thịt nguội, đồ chua', color: '#E8D5F5' },
  { id: 18, name: 'Bánh Cuốn', category: 'banh', emoji: '🫔', desc: 'Bánh tráng mỏng mềm, nhân thịt mộc nhĩ, nước mắm', color: '#E8D5F5' },
  { id: 19, name: 'Bánh Xèo', category: 'banh', emoji: '🥞', desc: 'Giòn rụm vàng ươm, nhân tôm thịt giá đỗ', color: '#E8D5F5' },
  { id: 20, name: 'Bánh Canh Cua', category: 'banh', emoji: '🦀', desc: 'Sợi bánh canh dày mềm, nước cua sánh mịn', color: '#E8D5F5' },
  { id: 21, name: 'Bánh Bèo', category: 'banh', emoji: '🍥', desc: 'Bánh bèo chen nhỏ xinh, tôm chấy, mỡ hành', color: '#E8D5F5' },
  { id: 22, name: 'Bánh Khọt', category: 'banh', emoji: '🧆', desc: 'Tròn xinh giòn bên ngoài, mềm bên trong, tôm tươi', color: '#E8D5F5' },
  { id: 23, name: 'Bánh Tráng Nướng', category: 'banh', emoji: '🫓', desc: 'Pizza Việt Nam! Trứng, hành, mỡ hành, tương ớt', color: '#E8D5F5' },
  { id: 24, name: 'Bánh Ướt', category: 'banh', emoji: '🫔', desc: 'Bánh mỏng mềm, chả lụa, nước mắm chua ngọt', color: '#E8D5F5' },

  // ====== 🥢 MÓN KHÔ ======
  { id: 25, name: 'Bún Chả Hà Nội', category: 'mon-kho', emoji: '🥢', desc: 'Thịt nướng than thơm, bún trắng, nước mắm chua ngọt', color: '#B8F0D8' },
  { id: 26, name: 'Bún Thịt Nướng', category: 'mon-kho', emoji: '🥩', desc: 'Thịt nướng mỡ hành, đậu phộng, rau sống đầy ắp', color: '#B8F0D8' },
  { id: 27, name: 'Bún Đậu Mắm Tôm', category: 'mon-kho', emoji: '🫘', desc: 'Đậu hũ chiên giòn, chả cốm, mắm tôm chanh ớt', color: '#B8F0D8' },
  { id: 28, name: 'Gỏi Cuốn', category: 'mon-kho', emoji: '🌯', desc: 'Cuốn tươi mát, tôm thịt rau, chấm tương đậu', color: '#B8F0D8' },
  { id: 29, name: 'Phở Cuốn', category: 'mon-kho', emoji: '🌯', desc: 'Bánh phở cuốn thịt bò xào rau thơm', color: '#B8F0D8' },
  { id: 30, name: 'Nem Nướng Nha Trang', category: 'mon-kho', emoji: '🍢', desc: 'Nem nướng thơm, bánh tráng cuốn rau sống', color: '#B8F0D8' },

  // ====== 🧁 ĂN VẶT & ĐỒ UỐNG ======
  { id: 31, name: 'Trà Sữa', category: 'an-vat', emoji: '🧋', desc: 'Trà sữa trân châu, nhiều topping, ngọt ngào', color: '#B8E4F0' },
  { id: 32, name: 'Chè', category: 'an-vat', emoji: '🍧', desc: 'Chè thập cẩm mát lạnh, đậu, thạch, nước cốt dừa', color: '#B8E4F0' },
  { id: 33, name: 'Bánh Tráng Trộn', category: 'an-vat', emoji: '🥗', desc: 'Giòn giòn cay cay, trứng cút, khô bò, satế', color: '#B8E4F0' },
  { id: 34, name: 'Ốc', category: 'an-vat', emoji: '🐚', desc: 'Ốc hút, ốc len, ốc dừa - đủ loại ốc Sài Gòn', color: '#B8E4F0' },
  { id: 35, name: 'Xôi', category: 'an-vat', emoji: '🍚', desc: 'Xôi mặn gà/thịt hoặc xôi ngọt đậu xanh', color: '#B8E4F0' },
  { id: 36, name: 'Cháo', category: 'an-vat', emoji: '🥣', desc: 'Cháo sườn/lòng nóng hổi, quẩy giòn rụm', color: '#B8E4F0' },
  { id: 37, name: 'Sinh Tố Bơ', category: 'an-vat', emoji: '🥑', desc: 'Sinh tố bơ béo mịn, sữa đặc ngọt lịm', color: '#B8E4F0' },
  { id: 38, name: 'Nước Mía', category: 'an-vat', emoji: '🥤', desc: 'Nước mía tắc mát lạnh, giải khát cực đã', color: '#B8E4F0' },

  // ====== 🍲 LẨU & NƯỚNG ======
  { id: 39, name: 'Lẩu Thái', category: 'lau-nuong', emoji: '🍲', desc: 'Chua cay Tom Yum, hải sản tươi, nấm', color: '#FFCBA4' },
  { id: 40, name: 'Lẩu Gà Lá É', category: 'lau-nuong', emoji: '🐔', desc: 'Gà ta thơm ngọt, lá é thơm nồng đặc trưng', color: '#FFCBA4' },
  { id: 41, name: 'Nướng BBQ', category: 'lau-nuong', emoji: '🥓', desc: 'Thịt nướng BBQ kiểu Hàn, đồ ăn kèm đầy đủ', color: '#FFCBA4' },
  { id: 42, name: 'Lẩu Bò', category: 'lau-nuong', emoji: '🐄', desc: 'Bò nhúng giấm/sa tế, rau tươi các loại', color: '#FFCBA4' },
  { id: 43, name: 'Lẩu Hải Sản', category: 'lau-nuong', emoji: '🦐', desc: 'Tôm, mực, cá, nghêu - hải sản tươi sống', color: '#FFCBA4' },
  { id: 44, name: 'Nướng Giấy Bạc', category: 'lau-nuong', emoji: '🫕', desc: 'Hải sản nướng giấy bạc, bơ tỏi thơm lừng', color: '#FFCBA4' },

  // ====== 🥗 KHÁC ======
  { id: 45, name: 'Bò Kho', category: 'khac', emoji: '🥘', desc: 'Bò kho mềm rục, nước sốt đậm đà, ăn với bánh mì', color: '#FFE5A0' },
  { id: 46, name: 'Gà Rán', category: 'khac', emoji: '🍗', desc: 'Gà giòn rụm chiên ngập dầu, khoai tây chiên', color: '#FFE5A0' },
  { id: 47, name: 'Pizza', category: 'khac', emoji: '🍕', desc: 'Pizza phô mai kéo sợi, topping tùy chọn', color: '#FFE5A0' },
  { id: 48, name: 'Sushi', category: 'khac', emoji: '🍣', desc: 'Sushi cá hồi tươi, wasabi, gừng hồng', color: '#FFE5A0' },
  { id: 49, name: 'Dimsum', category: 'khac', emoji: '🥟', desc: 'Há cảo, xíu mại, bánh bao nhỏ xinh', color: '#FFE5A0' },
  { id: 50, name: 'Tokbokki', category: 'khac', emoji: '🍡', desc: 'Bánh gạo Hàn cay ngọt, phô mai kéo sợi', color: '#FFE5A0' },
  { id: 51, name: 'Cá Kho Tộ', category: 'khac', emoji: '🐟', desc: 'Cá kho tiêu đậm vị, ăn với cơm trắng nóng', color: '#FFE5A0' },
  { id: 52, name: 'Gà Nướng Mật Ong', category: 'khac', emoji: '🍯', desc: 'Gà nướng vàng óng, mật ong thơm ngọt', color: '#FFE5A0' },
];

// Utility functions
function getFoodsByCategory(categoryId) {
  if (categoryId === 'all') return FOODS;
  return FOODS.filter(food => food.category === categoryId);
}

function getFoodById(id) {
  return FOODS.find(food => food.id === id);
}

function searchFoods(query) {
  const q = query.toLowerCase().trim();
  if (!q) return FOODS;
  return FOODS.filter(food =>
    food.name.toLowerCase().includes(q) ||
    food.desc.toLowerCase().includes(q) ||
    food.emoji.includes(q)
  );
}

function getRandomFood(categoryId = 'all') {
  const pool = getFoodsByCategory(categoryId);
  return pool[Math.floor(Math.random() * pool.length)];
}

function getCategoryName(categoryId) {
  const cat = CATEGORIES.find(c => c.id === categoryId);
  return cat ? cat.name : '';
}

function getCategoryEmoji(categoryId) {
  const cat = CATEGORIES.find(c => c.id === categoryId);
  return cat ? cat.emoji : '🍽️';
}

// Badge color mapping
const CATEGORY_BADGE_MAP = {
  'mon-nuoc': 'badge',
  'com': 'badge badge--peach',
  'banh': 'badge badge--lavender',
  'mon-kho': 'badge badge--mint',
  'an-vat': 'badge badge--blue',
  'lau-nuong': 'badge badge--peach',
  'khac': 'badge badge--lavender',
};
