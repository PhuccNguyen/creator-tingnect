'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, 
  Rocket,
  Megaphone,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Award,
  Crown,
  Target,
  Trophy,
  Info,
  DollarSign,
  Zap,
  Star,
  Check
} from 'lucide-react';
import styles from './Benefits.module.css';
import { 
  levelData,
} from './data';

const Benefits: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const [showAllTools, setShowAllTools] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  
  const handleRegisterClick = () => {
    window.open('https://forms.gle/H3k58Cj1k7YWpSum9', '_blank');
  };

 const levelData = {
  0: {
    title: "Level 0: Đã Đăng Ký",
    shortTitle: "Đã Đăng Ký",
    emoji: "📝",
    category: "Khởi Đầu",
    requirement: "Hoàn tất quy trình đăng ký",
    task: "<strong>Các bước thực hiện:</strong><br/><br/>1. Điền form đăng ký tại <strong>creator.tingnect.com</strong><br/><br/>2. Chờ duyệt hồ sơ từ BTC TingVote<br/><br/>3. Cung cấp <strong>Số Tài Khoản Ngân Hàng</strong> chính chủ để nhận thanh toán<br/><br/>4. Nhận email xác nhận và <strong>Link Vote Cá Nhân</strong>",
    reward: "✅ Nhận <strong>Link Vote Cá Nhân</strong> để chia sẻ & kêu gọi bình chọn<br/>📊 Theo dõi <strong>Dashboard Doanh Thu</strong> để xem lượt vote và phần thưởng",
    totalValue: "Kích hoạt tài khoản",
    commission: "20%",
    color: "#64748B"
  },
1: {
  title: "Level 1: Bước Đầu Tiên",
  shortTitle: "Bước Đầu Tiên",
  emoji: "🎬",
  category: "Khởi Động",
  requirement: "Tương tác cơ bản để khởi động hành trình",
  task: "<strong>Thực hiện các hành động cơ bản để bắt đầu hành trình cùng TingVote:</strong><br/><br/>1. Vào <strong>Fanpage TingVote và Hoa Hậu Sinh Viên Hòa Bình Việt Nam</strong><br/>→ <strong>Like ❤️</strong> và <strong>Comment ✍️</strong> tích cực dưới <strong>1 trong 3 bài post đã ghim</strong><br/>&nbsp;&nbsp;&nbsp;<em>Ví dụ comment: 'Mình vừa tham gia #CreatorLab! Xin chào TingVote! #HoaHauSinhVienHoaBinhVietNam'</em><br/><br/>2. Truy cập <strong>Link Vote cá nhân</strong> (được cấp qua email) và <strong>tự vote 100 vote</strong> để kích hoạt tài khoản<br/>→ <strong>Chụp ảnh màn hình</strong> sau khi hoàn tất.<br/><br/>3. Gửi <strong>ảnh chụp đã tự vote 100 vote</strong> cho <strong>BTC TingVote</strong> qua Fanpage chính thức để được duyệt & thanh toán.<br/><br/>4. <strong>Nhận email xác nhận</strong> tổng phần thưởng <strong>150.000đ</strong>, bao gồm:<br/>&nbsp;&nbsp;&nbsp;• <strong>50.000đ tiền mặt</strong> (thông tin chuyển khoản/xác nhận đã gửi)<br/>&nbsp;&nbsp;&nbsp;• <strong>100 Vote Tặng</strong> (đã cộng vào tài khoản)<br/>&nbsp;&nbsp;&nbsp;• <strong>Link Vote cá nhân</strong> & hướng dẫn hỗ trợ nếu cần",
  reward: "💰 Nhận <strong>50.000 VNĐ</strong> tiền mặt (chuyển khoản trong 24h)<br/>🎁 Bonus: <strong>100 Vote Tặng</strong>",
  totalValue: "150.000đ",
  commission: "20%",
  color: "#10B981"
},



2: {
  title: "Level 2: Creator Tiềm Năng",
  shortTitle: "Creator Tiềm Năng",
  emoji: "🤝",
  category: "Xây Dựng",
  requirement: "Kết nối bạn bè, tạo tương tác đầu tiên",
  task: "<strong>Tạo tương tác cộng đồng:</strong><br/><br/>1. Vào <strong>Fanpage TingVote</strong>, tìm bài đăng chính thức về bạn<br/>&nbsp;&nbsp;&nbsp;<em>(Nếu chưa có, nhờ BTC hỗ trợ đăng)</em><br/><br/>2. <strong>Share công khai</strong> bài đăng đó về trang cá nhân (kèm caption khích lệ)<br/>&nbsp;&nbsp;&nbsp;<em>Ví dụ caption: 'Mình vừa tham gia #CreatorLab cùng #TingVote và #HoaHauSinhVienHoaBinhVietNam! Ủng hộ mình nhé! Link Vote: [điền link vote cá nhân]'</em><br/><br/>3. <strong>Tag 3 người bạn</strong> thân hoặc người ủng hộ vào bài share<br/><br/>4. Đạt tối thiểu <strong>10 tương tác hợp lệ</strong><br/>&nbsp;&nbsp;&nbsp;• Like, Comment hoặc Share<br/>&nbsp;&nbsp;&nbsp;• Tính từ bài post chính thức hoặc bài share của bạn<br/><br/>5. Đạt tối thiểu <strong>150 vote</strong> trên tingvote.com<br/><br/>6. Gửi link bài share cho BTC để được duyệt",
  reward: "🎁 Nhận <strong>200 Vote Tặng</strong> (tương đương 200.000đ)<br/>🏅 Huy hiệu <strong>'Connector'</strong> – đánh dấu bước đầu tạo ảnh hưởng",
  totalValue: "200.000đ",
  commission: "20%",
  color: "#3B82F6"
},

  3: {
    title: "Level 3: Creator Sáng Tạo",
    shortTitle: "Creator Sáng Tạo",
    emoji: "📹",
    category: "Sáng Tạo",
    requirement: "Tạo nội dung chất lượng, thu hút lượt vote thật",
    task: "<strong>Trở thành Content Creator:</strong><br/><br/>1. Đăng <strong>1 bài post/video</strong> lên TikTok, Facebook hoặc Instagram<br/><br/>2. Bài đăng phải có <strong>đầy đủ</strong>:<br/>&nbsp;&nbsp;&nbsp;• Tag <strong>@TingVote</strong><br/>&nbsp;&nbsp;&nbsp;• Hashtag: <strong>#TingVote #CreatorLab #TênCuộcThiBạnĐangThi</strong><br/>&nbsp;&nbsp;&nbsp;• <strong>Link vote cá nhân</strong> của bạn<br/><br/>3. Đạt chỉ số tối thiểu:<br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>video</strong>: đạt <strong>150 lượt xem</strong><br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>post (ảnh/bài viết)</strong>: đạt <strong>15 tương tác</strong> (Like/Comment/Share)<br/><br/>4. Tổng lượt vote đạt <strong>600 vote</strong> trên tingvote.com<br/><br/>5. Gửi link bài đăng cho BTC để được duyệt",
    reward: "🎁 Nhận <strong>300 Vote Tặng</strong> (300.000đ)<br/>🏅 Huy hiệu <strong>'Creator Đồng'</strong> – chứng nhận Creator chính thức<br/>📊 Mở khóa <strong>Dashboard Doanh Thu</strong>",
    totalValue: "300.000đ",
    commission: "20%",
    color: "#F59E0B"
  },
  4: {
    title: "Level 4: Creator Vàng",
    shortTitle: "Creator Vàng",
    emoji: "🔥",
    category: "Lan Tỏa",
    requirement: "Tạo hiệu ứng lan tỏa và gia tăng lượt vote",
    task: "<strong>Tạo hiệu ứng lan tỏa:</strong><br/><br/>1. Đăng <strong>1 post/video</strong> trên TikTok, Facebook hoặc Instagram<br/><br/>2. Có <strong>đầy đủ</strong>:<br/>&nbsp;&nbsp;&nbsp;• Tag <strong>@TingVote</strong><br/>&nbsp;&nbsp;&nbsp;• Hashtag: <strong>#TingVote #CreatorLab #TênCuộcThiBạnĐangThi</strong><br/>&nbsp;&nbsp;&nbsp;• <strong>Link vote cá nhân</strong><br/><br/>3. Đạt chỉ số tối thiểu:<br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>video</strong>: đạt <strong>300 lượt xem</strong><br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>post</strong>: đạt <strong>20 tương tác</strong> (Like/Comment/Share)<br/><br/>4. Tổng lượt vote đạt <strong>3.000 vote</strong> trên tingvote.com<br/><br/>5. Gửi link bài đăng cho BTC để được duyệt",
    reward: "🎁 Nhận <strong>500 Vote Tặng</strong> (500.000đ)<br/>🏅 Huy hiệu <strong>'Creator Bạc'</strong><br/>📢 Feature trên <strong>TingVote Stories</strong> (24h)<br/>✨ BTC có thể repost bài xuất sắc lên Fanpage chính thức",
    totalValue: "500.000đ",
    commission: "20%",
    color: "#EC4899"
  },
  5: {
    title: "Level 5: Creator Bạch Kim",
    shortTitle: "Creator Bạch Kim",
    emoji: "⚡",
    category: "Chuyên Nghiệp",
    requirement: "Sản xuất nội dung thường xuyên, tăng trưởng ổn định",
    task: "<strong>Trở thành máy sản xuất content:</strong><br/><br/>1. Đăng <strong>3 bài post/video trong 7 ngày</strong><br/>&nbsp;&nbsp;&nbsp;• Có thể trên: TikTok, Facebook, Instagram (mix tùy ý)<br/><br/>2. <strong>Mỗi bài</strong> phải có đầy đủ:<br/>&nbsp;&nbsp;&nbsp;• Tag <strong>@TingVote</strong><br/>&nbsp;&nbsp;&nbsp;• Hashtag: <strong>#TingVote #CreatorLab #TênCuộcThiBạnĐangThi</strong><br/>&nbsp;&nbsp;&nbsp;• <strong>Link vote cá nhân</strong><br/><br/>3. Đạt chỉ số tối thiểu cho <strong>mỗi bài</strong>:<br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>video</strong>: <strong>200 views/video</strong><br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>post</strong>: <strong>20 tương tác/post</strong><br/><br/>4. Tổng lượt vote đạt <strong>8.000 vote</strong> trên tingvote.com<br/><br/>5. Gửi toàn bộ link bài đăng (cả 3 bài) cho BTC",
    reward: "💰 Nhận <strong>1.000 Vote Tặng</strong> (1.000.000đ)<br/>🏅 Huy hiệu <strong>'Creator Vàng'</strong> – biểu tượng Creator chuyên nghiệp<br/>📢 Được PR trên <strong>Social TingVote</strong> (Story + Post Facebook chính thức)",
    totalValue: "1.000.000đ",
    commission: "20%",
    color: "#FBBF24"
  },
  6: {
    title: "Level 6: Creator Kim Cương",
    shortTitle: "Creator Kim Cương",
    emoji: "💎",
    category: "Ảnh Hưởng",
    requirement: "Tạo sức ảnh hưởng mạnh, hợp tác Creator khác",
    task: "<strong>Trở thành Influencer chuyên nghiệp:</strong><br/><br/>1. Đăng <strong>3 posts/videos</strong> trên TikTok, Facebook hoặc Instagram<br/>&nbsp;&nbsp;&nbsp;• Mỗi bài có: Tag + Hashtag + Link vote đầy đủ<br/><br/>2. <strong>Tạo 1 video collab</strong> với Creator khác:<br/>&nbsp;&nbsp;&nbsp;• Video phải có mặt <strong>cả 2 người</strong><br/>&nbsp;&nbsp;&nbsp;• Cả 2 đều <strong>tag @TingVote</strong> và kêu gọi vote<br/>&nbsp;&nbsp;&nbsp;• Có thể là: duet, stitch hoặc video đồng sáng tạo<br/><br/>3. Đạt chỉ số tối thiểu cho <strong>mỗi bài</strong>:<br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>video</strong>: <strong>300 views/video</strong><br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>post</strong>: <strong>20 tương tác/post</strong><br/><br/>4. Tổng lượt vote đạt <strong>23.000 vote</strong> trên tingvote.com<br/><br/>5. Gửi tất cả link bài đăng + video collab cho BTC",
    reward: "🎁 Nhận <strong>1.500 Vote Tặng</strong> (1.500.000đ)<br/>🏅 Huy hiệu <strong>'Creator Bạch Kim'</strong><br/>📢 PR chính thức trên các kênh TingVote (TikTok, Facebook, Story & Post)<br/>💎 <strong>Tăng hoa hồng lên 21%</strong> cho doanh thu vượt 25 triệu",
    totalValue: "1.500.000đ",
    commission: "21%",
    color: "#8B5CF6"
  },
  7: {
    title: "Level 7: Thủ Lĩnh Cộng Đồng",
    shortTitle: "Thủ Lĩnh",
    emoji: "🌟",
    category: "Lãnh Đạo",
    requirement: "Lan tỏa giá trị tích cực, dẫn dắt cộng đồng",
    task: "<strong>Dẫn dắt cộng đồng:</strong><br/><br/>1. Đăng <strong>1 bài post/video</strong> chia sẻ:<br/>&nbsp;&nbsp;&nbsp;• Hoạt động cộng đồng, thiện nguyện<br/>&nbsp;&nbsp;&nbsp;• Hoặc thông điệp tích cực (lan tỏa năng lượng tốt, kết nối cộng đồng...)<br/><br/>2. Có <strong>đầy đủ</strong>:<br/>&nbsp;&nbsp;&nbsp;• Tag <strong>@TingVote</strong><br/>&nbsp;&nbsp;&nbsp;• Hashtag: <strong>#TingVote #CreatorLab #TênCuộcThiBạnĐangThi</strong><br/>&nbsp;&nbsp;&nbsp;• <strong>Link vote cá nhân</strong><br/><br/>3. Đạt chỉ số tối thiểu:<br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>video</strong>: <strong>500 lượt xem</strong><br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>post</strong>: <strong>30 tương tác</strong> (Like/Comment/Share)<br/><br/>4. Tổng lượt vote đạt <strong>55.000 vote</strong> trên tingvote.com<br/><br/>5. Gửi link bài đăng cho BTC để duyệt và xác minh nội dung",
    reward: "💰 Nhận <strong>3.000 Vote Tặng</strong> (3.000.000đ)<br/>🏅 Huy hiệu <strong>'Creator Kim Cương'</strong><br/>📢 PR chính thức trên các kênh TingVote (TikTok, Facebook, Story, Video highlight)<br/>💎 <strong>Hoa hồng 22%</strong> cho doanh thu vượt 55 triệu",
    totalValue: "3.000.000đ",
    commission: "22%",
    color: "#06B6D4"
  },
  8: {
    title: "Level 8: Đại Sứ Thương Hiệu",
    shortTitle: "Đại Sứ",
    emoji: "👑",
    category: "Đại Sứ",
    requirement: "Đại diện hình ảnh, lan tỏa thương hiệu TingVote",
    task: "<strong>Trở thành Đại Sứ Thương Hiệu:</strong><br/><br/>1. Đăng <strong>1 video/post truyền cảm hứng</strong> về:<br/>&nbsp;&nbsp;&nbsp;• Hành trình làm Creator của bạn<br/>&nbsp;&nbsp;&nbsp;• Hoặc lan tỏa tinh thần của chương trình TingVote<br/><br/>2. Có <strong>đầy đủ</strong>:<br/>&nbsp;&nbsp;&nbsp;• Tag <strong>@TingVote</strong><br/>&nbsp;&nbsp;&nbsp;• Hashtag: <strong>#TingVote #CreatorLab #TênCuộcThiBạnĐangThi</strong><br/>&nbsp;&nbsp;&nbsp;• <strong>Link vote cá nhân</strong><br/><br/>3. Đạt chỉ số tối thiểu:<br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>video</strong>: <strong>700 lượt xem</strong><br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>post</strong>: <strong>30 tương tác</strong> (Like/Comment/Share)<br/><br/>4. Tổng lượt vote đạt <strong>110.000 vote</strong> trên tingvote.com<br/><br/>5. Gửi link bài đăng cho BTC để được duyệt",
    reward: "🎁 Nhận <strong>5.000 Vote Tặng</strong> (5.000.000đ)<br/>🏅 Huy hiệu <strong>'Creator Tinh Anh'</strong> – cấp bậc danh dự Đại Sứ<br/>📢 PR chính thức trên kênh TingVote và đối tác truyền thông<br/>📱 Xuất hiện trên banner/ads social TingVote (<strong>Face of TingVote tuần</strong>)",
    totalValue: "5.000.000đ",
    commission: "22%",
    color: "#EF4444"
  },
  9: {
    title: "Level 9: Biểu Tượng Sáng Tạo",
    shortTitle: "Biểu Tượng",
    emoji: "🔥",
    category: "Biểu Tượng",
    requirement: "Trở thành hình mẫu sáng tạo, truyền cảm hứng",
    task: "<strong>Đạt đẳng cấp Biểu Tượng:</strong><br/><br/>1. Đăng <strong>3 posts/videos cá nhân</strong><br/>&nbsp;&nbsp;&nbsp;• TikTok, Facebook hoặc Instagram (mix được)<br/>&nbsp;&nbsp;&nbsp;• Kêu gọi vote và chia sẻ hành trình sáng tạo<br/><br/>2. <strong>Mỗi bài</strong> phải có đầy đủ:<br/>&nbsp;&nbsp;&nbsp;• Tag <strong>@TingVote</strong><br/>&nbsp;&nbsp;&nbsp;• Hashtag: <strong>#TingVote #CreatorLab #TênCuộcThiBạnĐangThi</strong><br/>&nbsp;&nbsp;&nbsp;• <strong>Link vote cá nhân</strong><br/><br/>3. <strong>Thực hiện 1 video collab</strong> với Creator khác hoặc chương trình cuộc thi:<br/>&nbsp;&nbsp;&nbsp;• Có thể: duet, stitch hoặc đồng sáng tạo<br/>&nbsp;&nbsp;&nbsp;• Có <strong>cả 2 Creator</strong> xuất hiện<br/>&nbsp;&nbsp;&nbsp;• Cả 2 <strong>tag @TingVote</strong> và kêu gọi vote<br/>&nbsp;&nbsp;&nbsp;• Gợi ý concept: '2 Creator – 1 thông điệp', 'Behind The Vote', 'Câu chuyện thật sau hành trình'<br/><br/>4. Đạt chỉ số tối thiểu cho <strong>mỗi bài</strong>:<br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>video</strong>: <strong>1.000 views/video</strong><br/>&nbsp;&nbsp;&nbsp;• Nếu là <strong>post</strong>: <strong>50 tương tác/post</strong><br/><br/>5. Tổng lượt vote đạt <strong>170.000 vote</strong> trên tingvote.com<br/><br/>6. Gửi tất cả link bài đăng & video collab cho BTC",
    reward: "💰 Thưởng nóng <strong>1.500.000đ tiền mặt</strong><br/>🎁 <strong>8.000 Vote Tặng</strong> (8.000.000đ)<br/>🏅 Huy hiệu <strong>'Creative Icon'</strong> – Biểu tượng sáng tạo hàng đầu<br/>📰 Bài PR báo chí chính thức (phỏng vấn hoặc feature profile)<br/>📢 <strong>Gói PR Đặc Biệt</strong> (~10.000.000đ) – TingVote & đối tác truyền thông<br/>🎥 Xuất hiện trong video tổng kết mùa hoặc highlight campaign",
    totalValue: "10.000.000đ",
    commission: "22%",
    color: "#DC2626"
  },
  10: {
    title: "Level 10: Nữ Hoàng Creator",
    shortTitle: "Nữ Hoàng Creator",
    emoji: "👑",
    category: "Hoàng Gia",
    requirement: "Top 1 Creator xuất sắc nhất mùa/sự kiện",
    task: "<strong>Đạt danh hiệu ĐỈNH CAO:</strong><br/><br/>1. Đạt <strong>Top 1 doanh thu vote tổng</strong> trong mùa/sự kiện<br/>&nbsp;&nbsp;&nbsp;• Tính toàn bộ thời gian mùa đang diễn ra<br/><br/>2. Tổng lượt vote tối thiểu <strong>300.000 vote</strong> trên tingvote.com<br/><br/>3. Đăng ít nhất <strong>3 nội dung kêu gọi vote</strong> (post/video) trong mùa:<br/>&nbsp;&nbsp;&nbsp;• Tag <strong>@TingVote</strong><br/>&nbsp;&nbsp;&nbsp;• Hashtag: <strong>#TingVote #CreatorLab #TênCuộcThiBạnĐangThi</strong><br/>&nbsp;&nbsp;&nbsp;• <strong>Link vote cá nhân</strong> hợp lệ<br/><br/>4. Thực hiện <strong>1 video collab</strong>:<br/>&nbsp;&nbsp;&nbsp;• Với Creator khác hoặc đội ngũ TingVote<br/>&nbsp;&nbsp;&nbsp;• Có thể là: phỏng vấn, talk mini, clip 'Thank You Fans'<br/><br/>5. Gửi toàn bộ link và bằng chứng Top 1 cho BTC<br/>&nbsp;&nbsp;&nbsp;• Phải gửi <strong>trước khi mùa kết thúc</strong>",
    reward: "👑 <strong>Vương miện danh dự 'Miss Creator'</strong> – biểu tượng tối cao của mùa<br/>💰 <strong>5.000.000đ tiền mặt</strong><br/>🎁 <strong>10.000 Vote Tặng</strong> (10.000.000đ)<br/>🏅 Huy hiệu <strong>'Nữ Hoàng Creator'</strong> trên hồ sơ chính thức<br/>📢 <strong>Gói PR Premium++</strong> – phỏng vấn chuyên sâu, press release & feature<br/>📱 <strong>Face of TingVote (48H)</strong> – xuất hiện banner, ads, homepage chính thức<br/>🎬 <strong>Video profile cinematic</strong> + <strong>01 bộ ảnh studio chuyên nghiệp</strong>",
    totalValue: "20.000.000đ",
    commission: "25%",
    color: "#A855F7",
    isQueen: true
  }
};

  const weeklyChampion = {
    title: "Giải Thưởng Tuần",
    emoji: "🏆",
    task: "🌟 Top 1 VOTE TUẦN<br/><br/>• 3,000 vote/tuần<br/>• 3 posts/tuần<br/>• Tag + hashtag + link",
    reward: "🤖 <strong>Gói AI & Masterclass</strong><br/>(33.2M - 3 tháng)<br/><br/>📢 <strong>Gói PR VIP</strong><br/>(5.9M - Toàn kênh)<br/><br/>🏆 Huy hiệu 'Weekly Champion'",
    color: "#F59E0B"
  };

  const benefits = [
    {
      icon: Sparkles,
      emoji: '💎',
      title: 'Bộ Công Cụ Sáng Tạo - FREE',
      value: '33.288.000 VNĐ',
      description: 'Nhận MIỄN PHÍ (33.288.000đ/tháng = 1.109.600đ/ngày) tất cả tài khoản:',
      details: {
        summary: [
          '✅ Canva Pro (100.000đ/tháng)',
          '✅ Canva EDU Pro',
          '✅ ChatGPT Premium (540.000đ/tháng)',
          '✅ Gamma (430.000đ/tháng) - Đối tác thiết kế AI, tạo slide, website, social post dễ dàng',
          '✅ Grammarly App (430.000đ/tháng)'
        ],
        full: [
          '✅ Canva Pro (100.000đ/tháng) - Thiết kế chuyên nghiệp',
          '✅ Canva EDU Pro - Phiên bản giáo dục',
          '✅ ChatGPT Premium (540.000đ/tháng)',
          '✅ Gamma (430.000đ/tháng) - Đối tác thiết kế AI giúp bạn tạo ra các bài thuyết trình, trang web, bài đăng trên mạng xã hội dễ dàng',
          '✅ Grammarly App (430.000đ/tháng) - Sửa lỗi tiếng Anh',
          '✅ Pikbest.com (527.000đ/tháng) - 10 triệu+ template',
          '✅ Lovepik.com (2.233.000đ/tháng) - 2.2 triệu+ tài nguyên',
          '✅ Capcut Pro (120.000đ/tháng) - Chỉnh sửa video',
          '✅ Global GPT (1.350.000đ/tháng) - 24 AI đỉnh cao (GPT-4, Claude, Gemini, Copilot...)',
          '✅ Click AI (420.000đ/tháng) - Tạo nội dung tự động',
          '✅ 1minAI (270.000đ/tháng) - Tạo video AI nhanh',
          '✅ Midjourney (720.000đ/tháng) - Tạo hình ảnh AI đẳng cấp',
          '✅ Netflix Premium (273.000đ/tháng)',
          '✅ Spotify Premium (325.000đ/tháng)',
          '✅ Youtube Premium (88.000đ/tháng)',
          '✅ 15.000+ khóa học online diễn giả nổi tiếng (trước 2022) - 3.899.000đ/tháng',
          '✅ 1.000+ khóa học diễn giả 20 lĩnh vực (cập nhật 2025) - 120.000đ/tháng',
          '✅ 1.000+ tài liệu AI chuyên sâu (1.556.000đ/tháng)',
          '✅ 1 triệu+ tài liệu tổng hợp 30 lĩnh vực (5.228.000đ/tháng)',
          '✅ Tổng hợp AI 30 lĩnh vực (120.000đ/tháng)',
          '� Tổng: 33.288.000đ/tháng (1.109.600đ/ngày)'
        ]
      },
      color: '#8B5CF6'
    },
    {
      icon: Gift,
      emoji: '🎁',
      title: 'Thưởng Nóng',
      value: '50K',
      description: 'Tiền mặt ngay khi duyệt',
      color: '#10B981'
    },
    {
      icon: Rocket,
      emoji: '🚀',
      title: 'Vote Khởi Động',
      value: '200K',
      description: '200 vote làm vốn ban đầu',
      color: '#F59E0B'
    },
    {
      icon: Megaphone,
      emoji: '📢',
      title: 'PR Truyền Thông',
      value: '5.9M',
      description: 'Quảng bá toàn kênh',
      color: '#3B82F6'
    }
  ];

  const tabs = [
    {
      id: 0,
      label: 'Creator Lab',
      icon: Target,
      title: 'Creator Lab',
      description: '33+ AI Tools',
      value: 'Là Gì?',
      highlight: 'MIỄN PHÍ',
      color: '#8B5CF6'
    },
    {
      id: 1,
      label: 'Cấp Độ',
      emoji: '🏆',
      icon: Trophy,
      title: 'Level System',
      description: '11 cấp độ',
      value: '245M',
      highlight: 'Thưởng tổng',
      color: '#F59E0B'
    },
    {
      id: 2,
      label: 'Giải Tuần',
      emoji: '👑',
      icon: Crown,
      title: 'Weekly Top',
      description: 'Mỗi tuần',
      value: 'Gói AI',
      highlight: 'Reset 7 ngày',
      color: '#EF4444'
    },
    {
      id: 3,
      label: 'Hoa Hồng',
      emoji: '💰',
      icon: DollarSign,
      title: 'Thu Nhập',
      description: 'Vote trả phí',
      value: '20%',
      highlight: 'Hàng tuần',
      color: '#10B981'
    }
  ];

  const commissionInfo = {
  title: "QUY TẮC HOA HỒNG & THANH TOÁN",
  items: [
    {
      icon: "🎯",
      title: "Tỷ Lệ Hoa Hồng",
      content: "<strong>20%</strong> trên <strong>doanh thu vote trả phí</strong> (thanh toán bằng tiền mặt)."
    },
    {
      icon: "📈",
      title: "Điều Kiện Nhận",
      content: "Tổng doanh thu tối thiểu <strong>100.000đ</strong> mới được thanh toán.<br/>Thanh toán được thực hiện khi tổng doanh thu tích lũy <strong>đạt mốc 100.000đ</strong> trở lên."
    },
    {
      icon: "💰",
      title: "Hình Thức Chi Trả",
      content: "Chuyển khoản qua tài khoản ngân hàng đã đăng ký <br/>hoặc trao trực tiếp tại sự kiện khi tổng doanh thu đạt <strong>100.000.000đ</strong> trở lên."
    },
    {
      icon: "⏰",
      title: "Chu Kỳ Thanh Toán",
      content: "Chốt doanh thu vào <strong>Chủ Nhật 23:59</strong> và thanh toán vào <strong>Thứ 3 hàng tuần</strong>."
    },
    {
      icon: "📊",
      title: "Thuế Thu Nhập Cá Nhân",
      content: "Thí sinh/Creator <strong>tự khai và tự chịu trách nhiệm</strong> về nghĩa vụ thuế thu nhập cá nhân theo quy định pháp luật."
    }
  ]
};


  return (
    <section id="benefits" className={styles.benefits} data-tour="benefits-section">
      <div className={styles.container}>
        {/* Header - Compact & Bold */}
        <motion.div 
          className={styles.mainHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          data-tour="benefits-title"
        >
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>TINGVOTE CREATOR LAB</span>
          </div>
          <h2 className={styles.title}>
            3 Hệ Thống Thưởng
            <br />
          </h2>
          <p className={styles.description}>
            <span className={styles.accent}>Creator Lab là gì?</span> + <span className={styles.accent}>Level System 245M</span> + <span className={styles.accent}>Weekly Champion 39M</span> + <span className={styles.accent}>20% Hoa Hồng</span>
          </p>
        </motion.div>

        {/* Tab Navigation - Premium Design */}
        <motion.div 
          className={styles.tabNavigation}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div id="benefits-tabs" className={styles.tabList} data-tour="benefits-tabs">
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  id={`benefits-tab-${tab.id}`}
                  className={`${styles.tabButton} ${isActive ? styles.tabActive : ''}`}
                  data-tour={`benefits-tab-${tab.id}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    
                    // Haptic feedback simulation
                    if (navigator.vibrate) {
                      navigator.vibrate([30, 10, 20]);
                    }
                    
                    // Sound effect simulation (Web Audio API)
                    try {
                      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
                      const oscillator = audioContext.createOscillator();
                      const gainNode = audioContext.createGain();
                      
                      oscillator.connect(gainNode);
                      gainNode.connect(audioContext.destination);
                      
                      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
                      
                      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                      
                      oscillator.start(audioContext.currentTime);
                      oscillator.stop(audioContext.currentTime + 0.1);
                    } catch (e) {
                      // Fallback for browsers that don't support Web Audio API
                      console.log('Audio not supported');
                    }
                    
                    // Visual click feedback - create temporary elements
                    const button = document.getElementById(`benefits-tab-${tab.id}`);
                    if (button) {
                      // Add click flash effect
                      button.style.boxShadow = `0 0 20px ${tab.color}60, 0 8px 32px rgba(0,0,0,0.2)`;
                      setTimeout(() => {
                        button.style.boxShadow = '';
                      }, 200);
                      
                      // Create click sparkles
                      for (let i = 0; i < 3; i++) {
                        const sparkle = document.createElement('div');
                        sparkle.style.cssText = `
                          position: absolute;
                          top: ${Math.random() * 100}%;
                          left: ${Math.random() * 100}%;
                          width: 6px;
                          height: 6px;
                          background: ${tab.color};
                          border-radius: 50%;
                          pointer-events: none;
                          z-index: 1000;
                          animation: sparkle 0.8s ease-out forwards;
                        `;
                        button.appendChild(sparkle);
                        setTimeout(() => sparkle.remove(), 800);
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.03,
                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)"
                  }}
                  whileTap={{ 
                    scale: 0.92,
                    y: -1,
                    transition: { duration: 0.1, ease: "easeOut" }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  {/* Ripple Effect */}
                  <motion.div 
                    className={styles.rippleEffect}
                    key={`ripple-${activeTab === tab.id ? Date.now() : 'static'}`}
                    animate={activeTab === tab.id ? {
                      scale: [0, 2.5],
                      opacity: [0.8, 0],
                    } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ 
                      backgroundColor: `${tab.color}40`
                    }}
                  />

                  {/* Gradient Background */}
                  <motion.div 
                    className={styles.tabGradientBg}
                    style={{ 
                      background: isActive 
                        ? `linear-gradient(135deg, ${tab.color}15, ${tab.color}25)` 
                        : 'transparent'
                    }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Click Explosion Effect */}
                  {isActive && (
                    <motion.div
                      className={styles.clickExplosion}
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ 
                        scale: [0, 1.5, 2],
                        opacity: [1, 0.6, 0],
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      style={{ 
                        borderColor: tab.color
                      }}
                    />
                  )}
                  
                  {/* Icon Section */}
                  <motion.div className={styles.tabIconWrapper}>
                    <motion.div
                      animate={isActive ? { 
                        rotate: [0, 15, -10, 5, 0],
                        scale: [1, 1.2, 1.1, 1.05, 1]
                      } : {}}
                      transition={{ 
                        duration: 0.8,
                        ease: "easeInOut"
                      }}
                      whileTap={{
                        rotate: [0, 20, -15, 0],
                        scale: [1, 1.3, 1.1, 1],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <IconComponent 
                        size={20} 
                        strokeWidth={2.5}
                        style={{ color: isActive ? 'white' : '#64748B' }}
                      />
                    </motion.div>

                    {/* Icon Bounce Effect */}
                    {isActive && (
                      <motion.div
                        className={styles.iconBounce}
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: [0, 1.4, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 0.6,
                          ease: "backOut"
                        }}
                        style={{ 
                          borderColor: tab.color
                        }}
                      />
                    )}
                    
                    {/* Active Ring */}
                    {isActive && (
                      <motion.div
                        className={styles.activeRing}
                        style={{ borderColor: tab.color }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      />
                    )}
                    
                    {/* Floating Particles */}
                    {isActive && (
                      <>
                        <motion.div 
                          className={styles.particle}
                          style={{ background: tab.color }}
                          animate={{ 
                            y: [-20, -30, -20],
                            x: [-5, 5, -5],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: 0
                          }}
                        />
                        <motion.div 
                          className={styles.particle}
                          style={{ background: tab.color }}
                          animate={{ 
                            y: [-15, -25, -15],
                            x: [5, -5, 5],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5
                          }}
                        />
                      </>
                    )}
                  </motion.div>
                  
                  {/* Content Section */}
                  <div className={styles.tabContent}>
                    <motion.div 
                      className={styles.tabHeader}
                      animate={isActive ? { 
                        scale: 1.08,
                        y: -1
                      } : { 
                        scale: 1,
                        y: 0 
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      whileTap={{
                        scale: 1.12,
                        transition: { duration: 0.1 }
                      }}
                    >
                      <motion.span 
                        className={styles.tabEmoji}
                        animate={isActive ? {
                          scale: [1, 1.3, 1.1, 1],
                          rotate: [0, 10, -5, 0]
                        } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        {tab.emoji}
                      </motion.span>
                      <span className={styles.tabLabel}>{tab.label}</span>
                    </motion.div>
                    
                    <motion.div 
                      className={styles.tabValueSection}
                      animate={isActive ? { 
                        y: -3,
                        scale: 1.02
                      } : { 
                        y: 0,
                        scale: 1
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      whileTap={{
                        scale: 1.05,
                        transition: { duration: 0.1 }
                      }}
                    >
                      <motion.span 
                        className={styles.tabValue} 
                        style={{ color: tab.color }}
                        animate={isActive ? {
                          scale: [1, 1.15, 1.05, 1],
                        } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {tab.value}
                      </motion.span>
                      <span className={styles.tabDesc}>{tab.description}</span>
                    </motion.div>
                    
                    <motion.span 
                      className={styles.tabHighlight} 
                      style={{ 
                        backgroundColor: `${tab.color}${isActive ? '30' : '20'}`, 
                        color: tab.color,
                        borderColor: tab.color
                      }}
                      animate={isActive ? { 
                        scale: [1, 1.08, 1.02, 1],
                        rotateX: [0, 5, -5, 0],
                        boxShadow: [
                          `0 0 0 ${tab.color}00`, 
                          `0 0 12px ${tab.color}50`, 
                          `0 0 8px ${tab.color}30`,
                          `0 0 0 ${tab.color}00`
                        ]
                      } : {}}
                      transition={{ 
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileTap={{
                        scale: 1.15,
                        rotateZ: [0, 2, -2, 0],
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tab.highlight}
                    </motion.span>
                  </div>
                  
                  {/* Click Indicator */}
                  <motion.div 
                    className={styles.clickHint}
                    animate={isActive ? { 
                      x: [0, 3, 0],
                      opacity: [0.6, 1, 0.6]
                    } : {}}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight size={14} style={{ color: isActive ? tab.color : '#94A3B8' }} />
                  </motion.div>
                </motion.button>
              );
            })}
          </div>
          
          <motion.div 
            className={styles.tabHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Info size={14} />
            <span>👆 Click để khám phá từng hệ thống thưởng</span>
          </motion.div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          className={styles.tabContentContainer}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Tab 0: Creator Lab */}
          {activeTab === 0 && (
            <div className={styles.tabPanel}>
              <div className={styles.introContent}>
                <h3 className={styles.panelTitle}>
                  Creator Lab
                </h3>
                <p className={styles.panelDescription}>
                  Gói quyền lợi <span className={styles.accent}>39.338 Triệu VNĐ</span> MIỄN PHÍ
                </p>
                
                <div className={styles.creatorLabInfo}>
                  <div className={styles.infoHeader}>
                    <Target size={18} />
                    <h4>Creator Lab là gì?</h4>
                  </div>
                  <div className={styles.infoContent}>
                    <p>
                      Chương trình MIỄN PHÍ giúp bạn <strong>tạo nội dung chuyên nghiệp</strong> với 
                      <strong> 33+ AI Tools</strong> và <strong>kiếm thu nhập thực</strong> từ vote trả phí.
                    </p>
                    
                    <div className={styles.keyFeatures}>
                      <div className={styles.feature}>
                        <span className={styles.featureIcon}>🤖</span>
                        <div><strong>33+ AI Tools</strong> - ChatGPT Premium, Canva Pro, Midjourney...</div>
                      </div>
                      <div className={styles.feature}>
                        <span className={styles.featureIcon}>💰</span>
                        <div><strong>Thu nhập 20%</strong> từ mỗi vote trả phí</div>
                      </div>
                      <div className={styles.feature}>
                        <span className={styles.featureIcon}>🎯</span>
                        <div><strong>Hệ thống Level</strong> với thưởng lên tới 245M</div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>

              <div className={styles.benefitsGrid}>
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      className={styles.benefitCard}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      whileHover={{ y: -4 }}
                      style={{ borderColor: benefit.color }}
                    >
                      <div className={styles.benefitIcon} style={{ background: benefit.color }}>
                        <IconComponent size={28} strokeWidth={2.5} />
                      </div>
                      <div className={styles.benefitInfo}>
                        <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                        <div className={styles.benefitValue} style={{ color: benefit.color }}>
                          {benefit.value}
                        </div>
                        <p className={styles.benefitDescription}>{benefit.description}</p>
                        
                        {benefit.details && index === 0 && (
                          <div className={styles.toolsExpand}>
                            <button 
                              className={styles.expandBtn}
                              onClick={() => setShowAllTools(!showAllTools)}
                            >
                              {showAllTools ? 'Thu gọn' : `Xem ${benefit.details.full.length} công cụ`}
                              {showAllTools ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                            
                            {showAllTools && (
                              <motion.div 
                                className={styles.toolsList}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.3 }}
                              >
                                {benefit.details.full.map((tool, idx) => (
                                  <div key={idx} className={styles.toolItem}>
                                    <Check size={14} />
                                    <span>{tool}</span>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className={styles.totalValue}>
                <div className={styles.totalLabel}>TỔNG GIÁ TRỊ CREATOR LAB</div>
                <div className={styles.totalAmount}>39.338M VNĐ</div>
                <div className={styles.totalNote}>🔥 100% MIỄN PHÍ CHO CREATOR</div>
              </div>
            </div>
          )}

          {/* Tab 1: Level System */}
{/* Tab 1: Level System */}
{activeTab === 1 && (
  <div className={styles.tabPanel}>
    <div className={styles.levelHeader}>
      <Trophy size={28} className={styles.headerIcon} />
      <div>
        <h3 className={styles.panelTitle}>Hệ Thống Level</h3>
        <p className={styles.panelDescription}>
          11 cấp độ - Tổng thưởng <span className={styles.accent}>245M+</span>
        </p>
      </div>
    </div>

    {/* Progress Overview */}
    <div className={styles.progressOverview}>
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${((activeLevel + 1) / Object.keys(levelData).length) * 100}%` }}
        />
      </div>
      <div className={styles.progressText}>
        Đang xem: Level {activeLevel} / {Object.keys(levelData).length - 1}
      </div>
    </div>

    {/* Quick Navigation */}
    <div className={styles.quickNav}>
      <button 
        className={styles.quickNavBtn}
        onClick={() => setActiveLevel(Math.max(0, activeLevel - 1))}
        disabled={activeLevel === 0}
      >
        <ChevronUp size={18} />
        <span>Level trước</span>
      </button>
      <button 
        className={styles.quickNavBtn}
        onClick={() => setActiveLevel(Math.min(10, activeLevel + 1))}
        disabled={activeLevel === 10}
      >
        <span>Level sau</span>
        <ChevronDown size={18} />
      </button>
    </div>

    {/* Level Accordion */}
    <div className={styles.levelAccordion}>
      {Object.entries(levelData).map(([key, level]) => {
        const levelNum = parseInt(key);
        const isActive = activeLevel === levelNum;
        
        return (
          <motion.div
            key={key}
            className={`${styles.accordionItem} ${isActive ? styles.accordionItemActive : ''}`}
            initial={false}
          >
            {/* Accordion Header - Always Visible */}
            <div 
              className={styles.accordionHeader}
              onClick={() => setActiveLevel(levelNum)}
              style={{ 
                borderLeftColor: level.color 
              }}
            >
              <div className={styles.accordionHeaderLeft}>
                <span className={styles.accordionEmoji}>{level.emoji}</span>
                <div className={styles.accordionHeaderInfo}>
                  <div className={styles.accordionLevelNum}>Level {key}</div>
                  <div className={styles.accordionTitle}>{level.shortTitle}</div>
                  <div className={styles.accordionCategory}>{level.category}</div>
                </div>
              </div>
              
              <div className={styles.accordionHeaderRight}>
                <div className={styles.accordionValue}>{level.totalValue}</div>
                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} color={level.color} />
                </motion.div>
              </div>
            </div>

            {/* Accordion Content - Expandable */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className={styles.accordionContent}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className={styles.accordionInner}>
                    {/* Requirement Badge */}
                    <div className={styles.requirementBadge}>
                      <Target size={14} />
                      <span>{level.requirement}</span>
                    </div>

                    {/* Commission Badge */}
                    <div className={styles.commissionBadge}>
                      <TrendingUp size={14} />
                      <span>Hoa hồng: {level.commission}</span>
                    </div>

                    {/* Task Section */}
                    <div className={styles.contentSection}>
                      <div className={styles.sectionHeader}>
                        <div className={styles.sectionIcon} style={{ background: `${level.color}15` }}>
                          <Info size={16} style={{ color: level.color }} />
                        </div>
                        <h4 className={styles.sectionTitle}>Nhiệm Vụ</h4>
                      </div>
                      <div 
                        className={styles.sectionContent}
                        dangerouslySetInnerHTML={{ __html: level.task }}
                      />
                    </div>

                    {/* Divider */}
                    <div 
                      className={styles.contentDivider}
                      style={{ background: `linear-gradient(90deg, ${level.color}, transparent)` }}
                    />

                    {/* Reward Section */}
                    <div className={styles.contentSection}>
                      <div className={styles.sectionHeader}>
                        <div className={styles.sectionIcon} style={{ background: `${level.color}15` }}>
                          <Gift size={16} style={{ color: level.color }} />
                        </div>
                        <h4 className={styles.sectionTitle}>Phần Thưởng</h4>
                      </div>
                      <div 
                        className={styles.sectionContent}
                        dangerouslySetInnerHTML={{ __html: level.reward }}
                      />
                    </div>

                    {/* Queen Badge */}
                    {'isQueen' in level && level.isQueen && (
                      <div className={styles.queenSpecial}>
                        <Crown size={20} />
                        <span>DANH HIỆU NỮ HOÀNG</span>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className={styles.accordionActions}>
                      <button 
                        className={styles.actionBtn}
                        style={{ 
                          background: level.color,
                          borderColor: level.color 
                        }}
                        onClick={handleRegisterClick}
                      >
                        <Sparkles size={18} />
                        <span>Đăng Ký Ngay</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>

    {/* Bottom CTA */}
    <motion.div 
      className={styles.bottomCta}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <p className={styles.ctaText}>Sẵn sàng bắt đầu hành trình?</p>
      <button 
        id="benefits-register-btn"
        className={styles.ctaButton}
        onClick={handleRegisterClick}
        data-tour="benefits-register"
      >
        <Gift size={20} />
        <span>Đăng Ký Creator Lab</span>
        <ArrowRight size={18} />
      </button>
    </motion.div>
  </div>
)}


          {/* Tab 2: Weekly Champion */}
          {activeTab === 2 && (
            <div className={styles.tabPanel}>
              <div className={styles.championHeader}>
                <div className={styles.championBadgeWrapper}>
                  <Crown size={40} />
                </div>
                <h3 className={styles.panelTitle}>Weekly Champion</h3>
                <p className={styles.panelDescription}>
                  Giải <span className={styles.accent}>39M</span> mỗi tuần
                </p>
                <div className={styles.resetBadge}>
                  <Zap size={14} />
                  <span>Reset Chủ Nhật 23:59</span>
                </div>
              </div>

              <div className={styles.championCard}>
                <div className={styles.championPrize}>
                  <Trophy size={48} className={styles.prizeIcon} />
                  <div className={styles.prizeInfo}>
                    <div className={styles.prizeAmount}>39.000.000₫</div>
                    <div className={styles.prizeLabel}>Giải Nhất Hàng Tuần</div>
                  </div>
                </div>

                <div className={styles.championDetails}>
                  <div className={styles.detailSection}>
                    <h4><Target size={18} /> Nhiệm Vụ</h4>
                    <div 
                      className={styles.detailContent}
                      dangerouslySetInnerHTML={{ __html: weeklyChampion.task }}
                    />
                  </div>

                  <div className={styles.detailSection}>
                    <h4><Gift size={18} /> Phần Thưởng</h4>
                    <div 
                      className={styles.detailContent}
                      dangerouslySetInnerHTML={{ __html: weeklyChampion.reward }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Commission */}
          {activeTab === 3 && (
            <div className={styles.tabPanel}>
              <div className={styles.commissionHeader}>
                <DollarSign size={32} className={styles.headerIcon} />
                <div>
                  <h3 className={styles.panelTitle}>Hoa Hồng 20%</h3>
                  <p className={styles.panelDescription}>
                    Thu nhập <span className={styles.accent}>không giới hạn</span>
                  </p>
                </div>
              </div>

              <div className={styles.commissionHighlight}>
                <div className={styles.percentBadge}>20%</div>
<div className={styles.commissionExample}>
  <div className={styles.exampleRow}>
    <span>10.000.000đ vote</span>
    <ArrowRight size={16} />
    <span className={styles.income}>2.000.000đ hoa hồng</span>
  </div>
  <div className={styles.exampleRow}>
    <span>50.000.000đ vote</span>
    <ArrowRight size={16} />
    <span className={styles.income}>10.000.000đ hoa hồng</span>
  </div>
  <div className={styles.exampleRow}>
    <span>100.000.000đ vote</span>
    <ArrowRight size={16} />
    <span className={styles.income}>20.000.000đ hoa hồng</span>
  </div>
</div>

              </div>

              <div className={styles.commissionRules}>
                {commissionInfo.items.map((item, index) => (
                  <div key={index} className={styles.ruleCard}>
                    <div className={styles.ruleIcon}>{item.icon}</div>
                    <div className={styles.ruleContent}>
                      <div className={styles.ruleTitle}>{item.title}</div>
                      <div 
                        className={styles.ruleText}
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.commissionNote}>
                <TrendingUp size={20} />
                <span>Càng nhiều vote, càng nhiều tiền!</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* CTA - Always Visible */}
        <motion.div 
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            id="benefits-register-btn"
            className={styles.ctaButton}
            onClick={handleRegisterClick}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Rocket size={24} />
            <div className={styles.ctaButtonContent}>
              <span className={styles.ctaButtonMain}>ĐĂNG KÝ NGAY</span>
              <span className={styles.ctaButtonSub}>NHẬN 39.338M MIỄN PHÍ</span>
            </div>
            <ArrowRight size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
