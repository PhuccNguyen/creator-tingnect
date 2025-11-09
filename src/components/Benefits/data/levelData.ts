export interface LevelData {
  title: string;
  shortTitle: string;
  emoji: string;
  category: string;
  requirement: string;
  task: string;
  reward: string;
  totalValue: string;
  commission: string;
  color: string;
  difficulty?: string;
  timeframe?: string;
  isQueen?: boolean;
}

export const levelData: Record<number, LevelData> = {
  0: {
    title: "Level 0: Đã Đăng Ký",
    shortTitle: "Đã Đăng Ký",
    emoji: "📝",
    category: "Khởi Đầu",
    requirement: "Hoàn thành đăng ký",
    task: "1️⃣ Đã điền form đăng ký trên <strong>creator.tingnect.com</strong><br/>2️⃣ Đã được team xét duyệt và chấp nhận<br/>3️⃣ Đã nộp Số Tài Khoản Ngân Hàng để nhận thanh toán",
    reward: "✅ Nhận <strong>Link Vote Cá Nhân</strong> để chia sẻ<br/>✅ Nhận quyền truy cập <strong>Báo Cáo</strong> theo dõi doanh thu",
    totalValue: "1.5M",
    commission: "20%",
    color: "#64748B",
    difficulty: "Dễ",
    timeframe: "1-2 ngày"
  },
  1: {
    title: "Level 1: Bước Đầu Tiên",
    shortTitle: "Bước Đầu Tiên",
    emoji: "🎬",
    category: "Khởi Động",
    requirement: "Tương tác cơ bản",
    task: "💬 Thực hiện <strong>3 hành động bất kỳ</strong> trên <strong>1 trong 3 bài post đã ghim</strong> của TingVote:<br/>• Like ❤️<br/>• Share 🔁<br/>• Comment ✍️ (nội dung khích lệ, tích cực)<br/><br/>📍Tìm bài post tại Fanpage <strong>TingVote</strong>",
    reward: "💰 Nhận <strong>50.000 VNĐ</strong> tiền mặt (chuyển khoản trong 24h)<br/>🎁 Bonus: <strong>100 Vote Tặng</strong>",
    totalValue: "150K",
    commission: "20%",
    color: "#10B981",
    difficulty: "Rất dễ",
    timeframe: "1 ngày"
  },
  2: {
    title: "Level 2: Creator Tiềm Năng",
    shortTitle: "Kết Nối",
    emoji: "🤝",
    category: "Xây Dựng",
    requirement: "Kết nối bạn bè",
    task: "🤝 Tạo tương tác cộng đồng:<br/>• Vào <strong>Fanpage TingVote</strong>, tìm bài đăng về bạn<br/>• <strong>Share bài đăng</strong> đó về trang cá nhân (chế độ công khai)<br/>• <strong>Tag 3 người bạn</strong> vào bài share<br/>• 3 người được tag phải:<br/>&nbsp;&nbsp;→ <strong>Like</strong> bài post gốc trên Fanpage TingVote<br/>&nbsp;&nbsp;→ <strong>Follow</strong> Fanpage TingVote<br/>&nbsp;&nbsp;→ <strong>Comment</strong> hoặc <strong>Share</strong> bài post gốc<br/>• Tổng cộng bài post gốc đạt: <strong>Tối thiểu 5 like + 2 comment</strong><br/>• <strong>Đạt tối thiểu 150 vote</strong><br/>• Gửi link bài share cho BTC",
    reward: "🎁 Nhận <strong>200 Vote Tặng</strong> (tương đương 200.000đ)<br/>🏅 Huy hiệu <strong>'Connector'</strong>",
    totalValue: "300K",
    commission: "20%",
    color: "#3B82F6",
    difficulty: "Dễ",
    timeframe: "3-5 ngày"
  },
  3: {
    title: "Level 3: Creator Sáng Tạo",
    shortTitle: "Creator",
    emoji: "📹",
    category: "Sáng Tạo",
    requirement: "Tạo nội dung chất lượng",
    task: "🎥 Trở thành Content Creator:<br/>• Đăng <strong>1 bài post/video BẤT KỲ</strong> lên Social (TikTok/Facebook/Instagram):<br/>&nbsp;&nbsp;→ Có tag <strong>@TingVote</strong><br/>&nbsp;&nbsp;→ Có hashtag: <strong>#TingVote #CreatorLab</strong><br/>&nbsp;&nbsp;→ Có <strong>Link đầy đủ</strong><br/>• Gửi link bài đăng cho BTC qua Fanpage TingVote<br/>• Bài đăng đạt <strong>tối thiểu 150 views</strong><br/>• <strong>ĐỒNG THỜI</strong> đạt <strong>500 vote trả phí</strong> (500.000đ doanh thu)",
    reward: "💰 Nhận <strong>300 Vote Tặng</strong> (300.000đ)<br/>🏅 Huy hiệu <strong>'Creator Đồng'</strong><br/>📊 Mở khóa <strong>Analytics Dashboard</strong>",
    totalValue: "500K",
    commission: "20%",
    color: "#F59E0B",
    difficulty: "Trung bình",
    timeframe: "1 tuần"
  },
  4: {
    title: "Level 4: Creator Vàng",
    shortTitle: "Viral Starter",
    emoji: "🔥",
    category: "Lan Tỏa",
    requirement: "Tạo hiệu ứng lan tỏa",
    task: "🔥 Tạo hiệu ứng lan tỏa:<br/>• Đăng <strong>1 post/video</strong> với đầy đủ tag + hashtag + link<br/>• <strong>Tag tối thiểu 4 người</strong> vào bài post<br/>• 4 người được tag phải:<br/>&nbsp;&nbsp;→ <strong>Follow Fanpage TingVote</strong><br/>&nbsp;&nbsp;→ <strong>Tương tác</strong> với bài post chính HOẶC bài post phụ từ share của bạn (like/comment/share)<br/>• Gửi bằng chứng cho BTC<br/>• <strong>ĐỒNG THỜI</strong> đạt <strong>2,500 vote trả phí</strong> (2.500.000đ doanh thu)",
    reward: "🎁 Nhận <strong>500 Vote Tặng</strong> (500.000đ)<br/>🏅 Huy hiệu <strong>'Creator Bạc'</strong><br/>📢 Được feature trên <strong>TingVote Stories</strong> (3 ngày)",
    totalValue: "1.2M",
    commission: "20%",
    color: "#EC4899",
    difficulty: "Trung bình khó",
    timeframe: "1-2 tuần"
  },
  5: {
    title: "Level 5: Creator Bạch Kim",
    shortTitle: "Content Machine",
    emoji: "⚡",
    category: "Chuyên Nghiệp",
    requirement: "Sản xuất nội dung thường xuyên",
    task: "⚡ Trở thành máy sản xuất content:<br/>• Đăng <strong>5 posts trong 1 tuần</strong> (7 ngày liên tiếp)<br/>&nbsp;&nbsp;→ Có thể trên: Page riêng, TikTok, Facebook, Instagram (mix tùy ý)<br/>&nbsp;&nbsp;→ Mỗi post phải có: tag + hashtag + link đầy đủ<br/>• Gửi link tất cả 5 posts cho BTC<br/>• <strong>ĐỒNG THỜI</strong> đạt <strong>5,000 vote trả phí</strong> (5.000.000đ doanh thu)",
    reward: "💰 Nhận <strong>1000 Vote Tặng</strong> (1.000.000đ)<br/>🏅 Huy hiệu <strong>'Creator Vàng'</strong><br/>📢 Được PR trên <strong>Social TingVote</strong> (TikTok/Facebook chính thức)<br/>🎬 Bonus: <strong>Template Video Pro</strong> miễn phí",
    totalValue: "2.5M",
    commission: "20%",
    color: "#FBBF24",
    difficulty: "Khó",
    timeframe: "1 tháng"
  },
  6: {
    title: "Level 6: Creator Kim Cương",
    shortTitle: "Influencer Pro",
    emoji: "💎",
    category: "Ảnh Hưởng",
    requirement: "Tạo ảnh hưởng mạnh mẽ",
    task: "👥 Trở thành Influencer chuyên nghiệp:<br/>• Đăng <strong>3 videos</strong> trong tháng với tag + hashtag + link đầy đủ<br/>• <strong>Tạo 1 video collaboration</strong> với Creator khác (cùng trong chương trình hoặc ngoài):<br/>&nbsp;&nbsp;→ Video phải xuất hiện cả 2 người<br/>&nbsp;&nbsp;→ Cả 2 đều tag @TingVote và kêu gọi vote<br/>&nbsp;&nbsp;→ Gửi link video collab cho BTC<br/>• <strong>ĐỒNG THỜI</strong> đạt <strong>15,000 vote trả phí</strong> (15.000.000đ doanh thu)",
    reward: "🎁 Nhận <strong>1500 Vote Tặng</strong> (1.500.000đ)<br/>🏅 Huy hiệu <strong>'Creator Bạch Kim'</strong><br/>📢 <strong>Gói Truyền Thông Cơ Bản</strong> - PR trên các kênh TingVote<br/>💎 <strong>Tăng hoa hồng lên 21%</strong> (cộng dưới dạng vote) cho doanh thu vượt 15M",
    totalValue: "5M",
    commission: "21%",
    color: "#8B5CF6",
    difficulty: "Khó",
    timeframe: "1-2 tháng"
  },
  7: {
    title: "Level 7: Community Leader",
    shortTitle: "Community Leader",
    emoji: "🌟",
    category: "Lãnh Đạo",
    requirement: "Dẫn dắt cộng đồng",
    task: "🌟 Dẫn dắt cộng đồng:<br/>• Đăng <strong>5 posts/videos chất lượng</strong> trong tháng<br/>• <strong>Tag tối thiểu 10 người</strong> (tổng cộng trong tất cả posts)<br/>• 10 người được tag phải:<br/>&nbsp;&nbsp;→ Follow Fanpage TingVote<br/>&nbsp;&nbsp;→ Tương tác với ít nhất 1 bài post của bạn<br/>• Gửi bằng chứng cho BTC<br/>• <strong>ĐỒNG THỜI</strong> đạt <strong>30,000 vote trả phí</strong> (30.000.000đ doanh thu)",
    reward: "💰 Nhận <strong>3,000 Vote Tặng</strong> (3.000.000đ)<br/>🏅 Huy hiệu <strong>'Creator Kim Cương'</strong><br/>📢 <strong>Gói PR Nâng Cao</strong> - Feature trên TikTok/FB/Instagram TingVote<br/>💎 <strong>Hoa hồng 22%</strong> cho doanh thu vượt 30M<br/>🎟️ Vé VIP <strong>TingVote Cinema</strong>",
    totalValue: "8M",
    commission: "22%",
    color: "#06B6D4",
    difficulty: "Rất khó",
    timeframe: "2-3 tháng"
  },
  8: {
    title: "Level 8: Brand Ambassador",
    shortTitle: "Brand Ambassador",
    emoji: "👑",
    category: "Đại Sứ",
    requirement: "Đại diện thương hiệu",
    task: "👑 Trở thành Đại Sứ Thương Hiệu:<br/>• Đăng <strong>10 posts/videos</strong> trong tháng (mix platform)<br/>• <strong>Tạo 2 video collaboration</strong> với 2 Creator khác nhau<br/>• <strong>Tag tổng cộng 20 người</strong> trong tất cả posts<br/>• 20 người phải follow + tương tác<br/>• Gửi toàn bộ bằng chứng cho BTC<br/>• <strong>ĐỒNG THỜI</strong> đạt <strong>60,000 vote trả phí</strong> (60.000.000đ doanh thu)",
    reward: "🎁 <strong>5,000 Vote Tặng</strong> (5.000.000đ)<br/>📱 Trở thành <strong>Face of TingVote</strong> (xuất hiện banner, ads)<br/>🏅 Huy hiệu <strong>'Creator Tinh Anh'</strong><br/>🎟️ 2 Vé VIP <strong>TingVote Cinema</strong>",
    totalValue: "15M",
    commission: "22%",
    color: "#EF4444",
    difficulty: "Cực khó",
    timeframe: "3-4 tháng"
  },
  9: {
    title: "Level 9: Creator Huyền Thoại",
    shortTitle: "Huyền Thoại",
    emoji: "🔥",
    category: "Huyền Thoại",
    requirement: "Đẳng cấp huyền thoại",
    task: "🔥 Đạt đẳng cấp Huyền Thoại:<br/>• Đăng <strong>15 posts/videos</strong> trong tháng<br/>• <strong>Tạo 2 video collaboration</strong> với 2 Creator khác nhau<br/>• <strong>Tag tổng cộng 30 người</strong> + tất cả phải follow & tương tác<br/>• Gửi toàn bộ bằng chứng cho BTC<br/>• <strong>ĐỒNG THỜI</strong> đạt <strong>120,000 vote trả phí</strong> (120.000.000đ doanh thu)",
    reward: "💰 Thưởng nóng <strong>1.500.000đ tiền mặt</strong><br/>🏆 Huy hiệu <strong>'Creator Huyền Thoại'</strong><br/>🎁 <strong>8,000 Vote Tặng</strong> (8.000.000đ)<br/>📢 <strong>Gói PR Đặc Biệt</strong> (trị giá 10M): Interview, press release, feature<br/>🎟️ 3 Vé VIP <strong>TingVote Cinema</strong>",
    totalValue: "25M",
    commission: "22%",
    color: "#DC2626",
    difficulty: "Siêu khó",
    timeframe: "4-6 tháng"
  },
  10: {
    title: "Level 10: 👑Miss Creator",
    shortTitle: "Miss Creator",
    emoji: "🏆",
    category: "Hoàng Gia",
    requirement: "Top 1 Creator của mùa",
    task: "🏆 Danh hiệu ĐỈNH CAO theo MÙA/SỰ KIỆN (không reset hàng tuần).<br/><br/>Để đạt Level 10, Creator cần:<br/>• <strong>Top 1</strong> doanh thu <strong>vote trả phí</strong> trong <strong>MÙA/SỰ KIỆN</strong> (toàn thời gian mùa)<br/>• Tối thiểu <strong>150,000 vote trả phí</strong> trong mùa (150.000.000đ)<br/>• <strong>20 posts/videos</strong> trong mùa (đầy đủ tag + hashtag + link)<br/>• <strong>5 collaboration videos</strong> với các Creator khác<br/>• <strong>1 livestream</strong> kêu gọi vote ≥ <strong>45 phút</strong><br/>• Nộp <strong>Media Kit</strong> (avatar, banner, bio, link tổng hợp) & tuân thủ <strong>Brand Guideline</strong><br/>• Gửi toàn bộ link/bằng chứng cho BTC trước khi mùa kết thúc",
    reward: "👑 <strong>Vương miện danh dự 'Creator Nữ Hoàng'</strong> + Huy hiệu hồ sơ<br/>🎁 <strong>10,000 Vote Tặng</strong> (10.000.000đ)<br/>💰 <strong>5.000.000đ tiền mặt</strong> (thưởng đăng quang mùa)<br/>📱 <strong>Face of TingVote</strong>: banner, ads, homepage <strong>90 ngày</strong><br/>📢 <strong>PR Premium++</strong>: Interview chuyên sâu, bài feature, press kit<br/>🎬 <strong>Video profile cinematic</strong> + <strong>01 bộ ảnh studio</strong><br/>🎟️ 5 Vé VIP <strong>TingVote Cinema</strong>",
    totalValue: "50M+",
    commission: "25%",
    color: "#A855F7",
    difficulty: "Huyền thoại",
    timeframe: "Cả mùa (3-6 tháng)",
    isQueen: true
  }
};