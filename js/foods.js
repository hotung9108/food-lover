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
  { id: 53, name: 'Bún Cá Cay', category: 'mon-nuoc', emoji: '🐟', desc: 'Đặc sản Hải Phòng, cá chiên giòn, nước dùng chua cay', color: '#FFE4E9' },
  { id: 54, name: 'Hủ Tiếu Gõ', category: 'mon-nuoc', emoji: '🍜', desc: 'Nước lèo thanh tao, thịt luộc, bò viên, hành phi', color: '#FFE4E9' },
  { id: 55, name: 'Miến Lươn', category: 'mon-nuoc', emoji: '🥢', desc: 'Lươn chiên giòn rụm, miến dong dai ngon', color: '#FFE4E9' },
  { id: 91, name: 'Mì Udon', category: 'mon-nuoc', emoji: '🍜', desc: 'Mì Udon Nhật Bản dai mềm, nước dùng thanh ngọt', color: '#FFE4E9' },
  { id: 92, name: 'Bún Mọc', category: 'mon-nuoc', emoji: '🍲', desc: 'Bún mọc sườn non, mộc nhĩ nấm hương thơm lừng', color: '#FFE4E9' },

  // ====== 🍚 CƠM & CƠM NHÀ ======
  { id: 9, name: 'Cơm Tấm', category: 'com', emoji: '🍚', desc: 'Sườn nướng mỡ hành, bì chả, trứng ốp la', color: '#FFF0E0' },
  { id: 10, name: 'Cơm Gà Hội An', category: 'com', emoji: '🐔', desc: 'Cơm vàng nghệ thơm, gà xé mềm, rau sống tươi', color: '#FFF0E0' },
  { id: 11, name: 'Cơm Sườn Nướng', category: 'com', emoji: '🥩', desc: 'Sườn nướng than hồng, mỡ hành thơm phức', color: '#FFF0E0' },
  { id: 12, name: 'Cơm Chiên Dương Châu', category: 'com', emoji: '🍳', desc: 'Cơm rang hạt rời, tôm lạp xưởng trứng', color: '#FFF0E0' },
  { id: 13, name: 'Cơm Rang Dưa Bò', category: 'com', emoji: '🥒', desc: 'Cơm rang thơm, bò xào dưa chua giòn sật', color: '#FFF0E0' },
  { id: 14, name: 'Cơm Gà Xối Mỡ', category: 'com', emoji: '🍗', desc: 'Gà giòn rụm xối mỡ, cơm trắng dẻo', color: '#FFF0E0' },
  { id: 15, name: 'Cơm Cuộn Rong Biển', category: 'com', emoji: '🍙', desc: 'Cơm cuộn kiểu Hàn, nhân tôm bơ phô mai', color: '#FFF0E0' },
  { id: 16, name: 'Cơm Cháy Chà Bông', category: 'com', emoji: '🍘', desc: 'Cơm cháy giòn rụm, chà bông tôm béo ngậy', color: '#FFF0E0' },
  { id: 56, name: 'Sườn Xào Chua Ngọt', category: 'com', emoji: '🍖', desc: 'Cơm trắng ăn kèm sườn chua chua ngọt ngọt tốn cơm', color: '#FFF0E0' },
  { id: 57, name: 'Đậu Phụ Tẩm Hành', category: 'com', emoji: '🧊', desc: 'Đậu hũ chiên giòn nhúng nước mắm hành thơm nức', color: '#FFF0E0' },
  { id: 58, name: 'Thịt Kho Tàu', category: 'com', emoji: '🥩', desc: 'Thịt ba chỉ béo ngậy kho mềm cùng trứng cút', color: '#FFF0E0' },
  { id: 59, name: 'Cơm Mâm Canh Chua', category: 'com', emoji: '🥣', desc: 'Cơm trắng, canh chua cá lóc, cá kho tộ đậm đà', color: '#FFF0E0' },
  { id: 60, name: 'Trứng Đúc Thịt', category: 'com', emoji: '🍳', desc: 'Trứng chiên thịt băm hành lá thơm ngon', color: '#FFF0E0' },
  { id: 61, name: 'Cá Thu Sốt Cà', category: 'com', emoji: '🐟', desc: 'Cá thu chiên sốt cà chua mặn ngọt đưa cơm', color: '#FFF0E0' },
  { id: 62, name: 'Gà Rang Gừng', category: 'com', emoji: '🐔', desc: 'Gà rang đậm vị, thơm lừng mùi gừng', color: '#FFF0E0' },
  { id: 63, name: 'Thịt Ba Chỉ Luộc', category: 'com', emoji: '🥩', desc: 'Thịt luộc chấm mắm tôm chua/nêm, kèm rau sống', color: '#FFF0E0' },
  { id: 64, name: 'Tôm Rim Thịt', category: 'com', emoji: '🦐', desc: 'Tôm rim ba chỉ cháy cạnh mặn ngọt cực tốn cơm', color: '#FFF0E0' },
  { id: 65, name: 'Cơm Hến', category: 'com', emoji: '🐚', desc: 'Đặc sản Huế, cơm nguội trộn hến xào, đậu phộng, tóp mỡ', color: '#FFF0E0' },
  { id: 93, name: 'Gà Sốt Me', category: 'com', emoji: '🍗', desc: 'Gà chiên giòn rụm áo lớp sốt me chua ngọt đậm đà', color: '#FFF0E0' },
  { id: 94, name: 'Cơm Nắm Onigiri (AEON)', category: 'com', emoji: '🍙', desc: 'Cơm nắm cá hồi/tôm mayonnaise siêu tiện lợi', color: '#FFF0E0' },

  // ====== 🥖 BÁNH ======
  { id: 17, name: 'Bánh Mì Thịt', category: 'banh', emoji: '🥖', desc: 'Bánh mì giòn, pa tê, thịt nguội, đồ chua', color: '#E8D5F5' },
  { id: 18, name: 'Bánh Cuốn', category: 'banh', emoji: '🫔', desc: 'Bánh tráng mỏng mềm, nhân thịt mộc nhĩ, nước mắm', color: '#E8D5F5' },
  { id: 19, name: 'Bánh Xèo', category: 'banh', emoji: '🥞', desc: 'Giòn rụm vàng ươm, nhân tôm thịt giá đỗ', color: '#E8D5F5' },
  { id: 20, name: 'Bánh Canh Cua', category: 'banh', emoji: '🦀', desc: 'Sợi bánh canh dày mềm, nước cua sánh mịn', color: '#E8D5F5' },
  { id: 21, name: 'Bánh Bèo', category: 'banh', emoji: '🍥', desc: 'Bánh bèo chen nhỏ xinh, tôm chấy, mỡ hành', color: '#E8D5F5' },
  { id: 22, name: 'Bánh Khọt', category: 'banh', emoji: '🧆', desc: 'Tròn xinh giòn bên ngoài, mềm bên trong, tôm tươi', color: '#E8D5F5' },
  { id: 23, name: 'Bánh Tráng Nướng', category: 'banh', emoji: '🫓', desc: 'Pizza Việt Nam! Trứng, hành, mỡ hành, tương ớt', color: '#E8D5F5' },
  { id: 24, name: 'Bánh Ướt', category: 'banh', emoji: '🫔', desc: 'Bánh mỏng mềm, chả lụa, nước mắm chua ngọt', color: '#E8D5F5' },
  { id: 66, name: 'Bánh Gối', category: 'banh', emoji: '🥟', desc: 'Bánh chiên giòn rụm, nhân thịt, miến, mộc nhĩ', color: '#E8D5F5' },
  { id: 67, name: 'Bánh Tôm', category: 'banh', emoji: '🦐', desc: 'Bánh tôm Hồ Tây chiên giòn ăn kèm rau sống', color: '#E8D5F5' },
  { id: 95, name: 'Bánh Crepe', category: 'banh', emoji: '🥞', desc: 'Crepe dâu tây, chuối chocolate ngập tràn kem tươi', color: '#E8D5F5' },

  // ====== 🥢 MÓN KHÔ ======
  { id: 25, name: 'Bún Chả Hà Nội', category: 'mon-kho', emoji: '🥢', desc: 'Thịt nướng than thơm, bún trắng, nước mắm chua ngọt', color: '#B8F0D8' },
  { id: 26, name: 'Bún Thịt Nướng', category: 'mon-kho', emoji: '🥩', desc: 'Thịt nướng mỡ hành, đậu phộng, rau sống đầy ắp', color: '#B8F0D8' },
  { id: 27, name: 'Bún Đậu Mắm Tôm', category: 'mon-kho', emoji: '🫘', desc: 'Đậu hũ chiên giòn, chả cốm, mắm tôm chanh ớt', color: '#B8F0D8' },
  { id: 28, name: 'Gỏi Cuốn', category: 'mon-kho', emoji: '🌯', desc: 'Cuốn tươi mát, tôm thịt rau, chấm tương đậu', color: '#B8F0D8' },
  { id: 29, name: 'Phở Cuốn', category: 'mon-kho', emoji: '🌯', desc: 'Bánh phở cuốn thịt bò xào rau thơm', color: '#B8F0D8' },
  { id: 30, name: 'Nem Nướng Nha Trang', category: 'mon-kho', emoji: '🍢', desc: 'Nem nướng thơm, bánh tráng cuốn rau sống', color: '#B8F0D8' },
  { id: 68, name: 'Bún Chả Giò', category: 'mon-kho', emoji: '🥢', desc: 'Bún tươi ăn kèm chả giò chiên giòn và nước mắm chua ngọt', color: '#B8F0D8' },
  { id: 69, name: 'Nem Rán / Chả Giò', category: 'mon-kho', emoji: '🌯', desc: 'Nem cuốn chiên giòn rụm nhân tôm thịt', color: '#B8F0D8' },

  // ====== 🧁 ĂN VẶT & ĐỒ UỐNG ======
  { id: 31, name: 'Trà Sữa', category: 'an-vat', emoji: '🧋', desc: 'Trà sữa trân châu, nhiều topping, ngọt ngào', color: '#B8E4F0' },
  { id: 32, name: 'Chè', category: 'an-vat', emoji: '🍧', desc: 'Chè thập cẩm mát lạnh, đậu, thạch, nước cốt dừa', color: '#B8E4F0' },
  { id: 33, name: 'Bánh Tráng Trộn', category: 'an-vat', emoji: '🥗', desc: 'Giòn giòn cay cay, trứng cút, khô bò, satế', color: '#B8E4F0' },
  { id: 34, name: 'Ốc', category: 'an-vat', emoji: '🐚', desc: 'Ốc hút, ốc len, ốc dừa - đủ loại ốc Sài Gòn', color: '#B8E4F0' },
  { id: 35, name: 'Xôi', category: 'an-vat', emoji: '🍚', desc: 'Xôi mặn gà/thịt hoặc xôi ngọt đậu xanh', color: '#B8E4F0' },
  { id: 36, name: 'Cháo', category: 'an-vat', emoji: '🥣', desc: 'Cháo sườn/lòng nóng hổi, quẩy giòn rụm', color: '#B8E4F0' },
  { id: 37, name: 'Sinh Tố Bơ', category: 'an-vat', emoji: '🥑', desc: 'Sinh tố bơ béo mịn, sữa đặc ngọt lịm', color: '#B8E4F0' },
  { id: 38, name: 'Nước Mía', category: 'an-vat', emoji: '🥤', desc: 'Nước mía tắc mát lạnh, giải khát cực đã', color: '#B8E4F0' },
  { id: 70, name: 'Ốc Xào Bơ Tỏi', category: 'an-vat', emoji: '🧄', desc: 'Ốc hương xào bơ tỏi béo ngậy, mút mát chấm bánh mì', color: '#B8E4F0' },
  { id: 71, name: 'Cháo Trai', category: 'an-vat', emoji: '🥣', desc: 'Cháo trai sườn sụn, rắc tiêu và quẩy giòn', color: '#B8E4F0' },
  { id: 79, name: 'Trà Mãng Cầu', category: 'an-vat', emoji: '🥤', desc: 'Trà mãng cầu chua ngọt thanh mát, giải nhiệt', color: '#B8E4F0' },
  { id: 80, name: 'Trà Chanh Giã Tay', category: 'an-vat', emoji: '🍋', desc: 'Trà chanh giã tay thơm nức mùi chanh Quảng Đông', color: '#B8E4F0' },
  { id: 81, name: 'Cà Phê Muối', category: 'an-vat', emoji: '☕', desc: 'Cà phê đắng nhẹ phủ lớp kem muối béo ngậy', color: '#B8E4F0' },
  { id: 82, name: 'Cá Viên Chiên', category: 'an-vat', emoji: '🍢', desc: 'Cá viên, bò viên, xúc xích chiên ngập dầu', color: '#B8E4F0' },
  { id: 83, name: 'Bánh Chuối Chiên', category: 'an-vat', emoji: '🍌', desc: 'Bánh chuối chiên giòn rụm, ngọt lịm', color: '#B8E4F0' },
  { id: 96, name: 'Nem Chua Rán', category: 'an-vat', emoji: '🌭', desc: 'Nem chua rán tẩm bột giòn, chấm tương ớt cay cay', color: '#B8E4F0' },
  { id: 97, name: 'Cá Viên Chiên Nước Mắm', category: 'an-vat', emoji: '🥘', desc: 'Viên chiên xào mắm tỏi đậm đà nhức nách', color: '#B8E4F0' },

  // ====== 🍲 LẨU & NƯỚNG ======
  { id: 39, name: 'Lẩu Thái', category: 'lau-nuong', emoji: '🍲', desc: 'Chua cay Tom Yum, hải sản tươi, nấm', color: '#FFCBA4' },
  { id: 40, name: 'Lẩu Gà Lá É', category: 'lau-nuong', emoji: '🐔', desc: 'Gà ta thơm ngọt, lá é thơm nồng đặc trưng', color: '#FFCBA4' },
  { id: 41, name: 'Nướng BBQ', category: 'lau-nuong', emoji: '🥓', desc: 'Thịt nướng BBQ kiểu Hàn, đồ ăn kèm đầy đủ', color: '#FFCBA4' },
  { id: 42, name: 'Lẩu Bò', category: 'lau-nuong', emoji: '🐄', desc: 'Bò nhúng giấm/sa tế, rau tươi các loại', color: '#FFCBA4' },
  { id: 43, name: 'Lẩu Hải Sản', category: 'lau-nuong', emoji: '🦐', desc: 'Tôm, mực, cá, nghêu - hải sản tươi sống', color: '#FFCBA4' },
  { id: 44, name: 'Nướng Giấy Bạc', category: 'lau-nuong', emoji: '🫕', desc: 'Hải sản nướng giấy bạc, bơ tỏi thơm lừng', color: '#FFCBA4' },
  { id: 72, name: 'Lẩu Ếch Măng Cay', category: 'lau-nuong', emoji: '🐸', desc: 'Ếch đồng dai ngon xào măng cay xè, nhúng lẩu', color: '#FFCBA4' },
  { id: 84, name: 'Lẩu Riêu Cua Bắp Bò', category: 'lau-nuong', emoji: '🦀', desc: 'Lẩu riêu cua đồng thơm phức, nhúng bắp bò hoa', color: '#FFCBA4' },
  { id: 85, name: 'Lẩu Nấm', category: 'lau-nuong', emoji: '🍄', desc: 'Lẩu nấm thanh đạm, nước dùng ngọt thanh', color: '#FFCBA4' },
  { id: 86, name: 'Bò Nướng Tảng', category: 'lau-nuong', emoji: '🥩', desc: 'Thịt bò nướng tảng nguyên miếng, sốt tiêu đen', color: '#FFCBA4' },
  { id: 87, name: 'Chân Gà Nướng', category: 'lau-nuong', emoji: '🍗', desc: 'Chân gà nướng sa tế giòn sật, nhậu cực bén', color: '#FFCBA4' },
  { id: 88, name: 'Nướng Ngói', category: 'lau-nuong', emoji: '🥓', desc: 'Thịt nướng trên ngói đỏ hồng, mỡ xèo xèo', color: '#FFCBA4' },

  // ====== 🥗 KHÁC ======
  { id: 45, name: 'Bò Kho', category: 'khac', emoji: '🥘', desc: 'Bò kho mềm rục, nước sốt đậm đà, ăn với bánh mì', color: '#FFE5A0' },
  { id: 46, name: 'Gà Rán', category: 'khac', emoji: '🍗', desc: 'Gà giòn rụm chiên ngập dầu, khoai tây chiên', color: '#FFE5A0' },
  { id: 47, name: 'Pizza', category: 'khac', emoji: '🍕', desc: 'Pizza phô mai kéo sợi, topping tùy chọn', color: '#FFE5A0' },
  { id: 48, name: 'Sushi', category: 'khac', emoji: '🍣', desc: 'Sushi cá hồi tươi, wasabi, gừng hồng', color: '#FFE5A0' },
  { id: 49, name: 'Dimsum', category: 'khac', emoji: '🥟', desc: 'Há cảo, xíu mại, bánh bao nhỏ xinh', color: '#FFE5A0' },
  { id: 50, name: 'Tokbokki', category: 'khac', emoji: '🍡', desc: 'Bánh gạo Hàn cay ngọt, phô mai kéo sợi', color: '#FFE5A0' },
  { id: 51, name: 'Cá Kho Tộ', category: 'khac', emoji: '🐟', desc: 'Cá kho tiêu đậm vị, ăn với cơm trắng nóng', color: '#FFE5A0' },
  { id: 52, name: 'Gà Nướng Mật Ong', category: 'khac', emoji: '🍯', desc: 'Gà nướng vàng óng, mật ong thơm ngọt', color: '#FFE5A0' },
  { id: 73, name: 'Rau Muống Xào Tỏi', category: 'khac', emoji: '🥬', desc: 'Rau muống xanh giòn xào tỏi thơm phức', color: '#FFE5A0' },
  { id: 74, name: 'Bò Lúc Lắc', category: 'khac', emoji: '🥩', desc: 'Bò mềm xào hành tây ớt chuông, ăn kèm khoai tây chiên', color: '#FFE5A0' },
  { id: 75, name: 'Gà Tần', category: 'khac', emoji: '🥣', desc: 'Gà ác tần thuốc bắc ngải cứu siêu bổ dưỡng', color: '#FFE5A0' },
  { id: 76, name: 'Gỏi Ngó Sen Tôm Thịt', category: 'khac', emoji: '🥗', desc: 'Gỏi tôm thịt ngó sen chua ngọt chống ngán', color: '#FFE5A0' },
  { id: 77, name: 'Mực Xào Cần Tỏi', category: 'khac', emoji: '🦑', desc: 'Mực tươi giòn sật xào cần tây, tỏi tây', color: '#FFE5A0' },
  { id: 78, name: 'Canh Cua Mồng Tơi', category: 'khac', emoji: '🥣', desc: 'Mâm cơm Bắc chuẩn vị cùng cà pháo mắm tôm', color: '#FFE5A0' },
  { id: 89, name: 'Mì Ý Spaghetti', category: 'khac', emoji: '🍝', desc: 'Mì Ý sốt bò băm cà chua chua chua ngọt ngọt', color: '#FFE5A0' },
  { id: 90, name: 'Hàu Nướng Mỡ Hành', category: 'khac', emoji: '🦪', desc: 'Hàu tươi nướng mỡ hành đậu phộng béo ngậy', color: '#FFE5A0' },
  { id: 98, name: 'Takoyaki (AEON)', category: 'khac', emoji: '🐙', desc: 'Bánh bạch tuộc nướng rắc cá bào múa lượn', color: '#FFE5A0' },
  { id: 99, name: 'Gà Nướng Yakitori (AEON)', category: 'khac', emoji: '🍢', desc: 'Xiên gà nướng sốt Teriyaki đậm vị Nhật Bản', color: '#FFE5A0' },
  { id: 100, name: 'Sushi Đóng Hộp (AEON)', category: 'khac', emoji: '🍣', desc: 'Hộp Sushi mix đủ vị tươi ngon siêu tiết kiệm', color: '#FFE5A0' },
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
