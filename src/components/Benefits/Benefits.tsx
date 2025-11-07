'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      task: "💬 Thực hiện <strong>3 hành động bất kỳ</strong> trên <strong>1 trong 3 bài post đã ghim</strong> của TingVote:<br/>• Like ❤️<br/>• Share 🔁<br/>• Comment ✍️ (nội dung khích lệ, tích cực)<br/><br/>�Tìm bài post tại Fanpage <strong>TingVote</strong>",
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
      task: "� Trở thành Content Creator:<br/>• Đăng <strong>1 bài post/video BẤT KỲ</strong> lên Social (TikTok/Facebook/Instagram):<br/>&nbsp;&nbsp;→ Có tag <strong>@TingVote</strong><br/>&nbsp;&nbsp;→ Có hashtag: <strong>#TingVote #CreatorLab</strong><br/>&nbsp;&nbsp;→ Có <strong>Link đầy đủ</strong><br/>• Gửi link bài đăng cho BTC qua Fanpage TingVote<br/>• Bài đăng đạt <strong>tối thiểu 150 views</strong><br/>• <strong>ĐỒNG THỜI</strong> đạt <strong>500 vote trả phí</strong> (500.000đ doanh thu)",
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
      task: "� Trở thành Đại Sứ Thương Hiệu:<br/>• Đăng <strong>10 posts/videos</strong> trong tháng (mix platform)<br/>• <strong>Tạo 2 video collaboration</strong> với 2 Creator khác nhau<br/>• <strong>Tag tổng cộng 20 người</strong> trong tất cả posts<br/>• 20 người phải follow + tương tác<br/>• Gửi toàn bộ bằng chứng cho BTC<br/>• <strong>ĐỒNG THỜI</strong> đạt <strong>60,000 vote trả phí</strong> (60.000.000đ doanh thu)",
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
      task: "� Đạt đẳng cấp Huyền Thoại:<br/>• Đăng <strong>15 posts/videos</strong> trong tháng<br/>• <strong>Tạo 2 video collaboration</strong> với 2 Creator khác nhau<br/>• <strong>Tag tổng cộng 30 người</strong> + tất cả phải follow & tương tác<br/>• Gửi toàn bộ bằng chứng cho BTC<br/>• <strong>ĐỒNG THỜI</strong> đạt <strong>120,000 vote trả phí</strong> (120.000.000đ doanh thu)",
      reward: "💰 Thưởng nóng <strong>1.500.000đ tiền mặt</strong><br/>� Huy hiệu <strong>'Creator Huyền Thoại'</strong><br/>🎁 <strong>8,000 Vote Tặng</strong> (8.000.000đ)<br/>📢 <strong>Gói PR Đặc Biệt</strong> (trị giá 10M): Interview, press release, feature<br/>🎟️ 3 Vé VIP <strong>TingVote Cinema</strong>",
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
      emoji: '🎯',
      icon: Target,
      title: 'Creator Lab',
      description: 'Gói quyền lợi',
      value: '39.338TR',
      highlight: 'FREE 100%',
      color: '#8B5CF6'
    },
    {
      id: 1,
      label: 'Cấp Độ',
      emoji: '🏆',
      icon: Trophy,
      title: 'Hệ Thống Level',
      description: '11 cấp độ',
      value: '245TR',
      highlight: 'Thưởng tổng',
      color: '#F59E0B'
    },
    {
      id: 2,
      label: 'Giải Tuần',
      emoji: '👑',
      icon: Crown,
      title: 'Weekly Champion',
      description: 'Mỗi tuần',
      value: '39TR',
      highlight: 'Reset 7 ngày',
      color: '#EF4444'
    },
    {
      id: 3,
      label: 'Hoa Hồng',
      emoji: '💰',
      icon: DollarSign,
      title: 'Thu Nhập 20%',
      description: 'Không giới hạn',
      value: '20%',
      highlight: 'Hàng tuần',
      color: '#10B981'
    }
  ];

  const commissionInfo = {
    title: "QUY TẮC HOA HỒNG",
    items: [
      {
        icon: "🎯",
        title: "Tỷ Lệ",
        content: "<strong>20%</strong> trên vote trả phí (nhận tiền mặt)"
      },
      {
        icon: "⚖️",
        title: "Điều Kiện",
        content: "Tối thiểu <strong>100 vote mới/tuần</strong>"
      },
      {
        icon: "🔄",
        title: "Chu Kỳ",
        content: "Chốt Chủ Nhật 23:59 - Trả Thứ 3"
      }, 
      {
        icon: "💸",
        title: "Phương Thức",
        content: "Chuyển khoản ngân hàng"
      },
      {
        icon: "📊",
        title: "Thuế Thu Nhập",
        content: "Cá Nhân <strong>Tự Khai Phần Này</strong>"
      }
    ]
  };

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        {/* Header - Compact & Bold */}
        <motion.div 
          className={styles.mainHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
            <span className={styles.accent}>Creator Lab 39.338M</span> + <span className={styles.accent}>Level System 245M</span> + <span className={styles.accent}>Weekly Champion 39M</span> + <span className={styles.accent}>20% Hoa Hồng</span>
          </p>
        </motion.div>

        {/* Tab Navigation - Enhanced Design */}
        <motion.div 
          className={styles.tabNavigation}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div id="benefits-tabs" className={styles.tabList}>
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  id={`benefits-tab-${tab.id}`}
                  className={`${styles.tabButton} ${isActive ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={styles.tabIconWrapper}>
                    <IconComponent size={24} />
                    {isActive && (
                      <motion.div
                        className={styles.activeIndicator}
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </div>
                  <div className={styles.tabContent}>
                    <span className={styles.tabLabel}>
                      <span className={styles.tabEmoji}>{tab.emoji}</span>
                      {tab.label}
                    </span>
                    <div className={styles.tabValueSection}>
                      <span className={styles.tabValue} style={{ color: tab.color }}>
                        {tab.value}
                      </span>
                      <span className={styles.tabDesc}>{tab.description}</span>
                    </div>
                    <span className={styles.tabHighlight} style={{ backgroundColor: `${tab.color}20`, color: tab.color }}>
                      {tab.highlight}
                    </span>
                  </div>
                  <div className={styles.clickHint}>
                    <ArrowRight size={16} />
                  </div>
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
                  <Sparkles size={28} className={styles.titleIcon} />
                  Creator Lab
                </h3>
                <p className={styles.panelDescription}>
                  Gói quyền lợi <span className={styles.accent}>39.338 Triệu VNĐ</span> MIỄN PHÍ
                </p>
                
                <div className={styles.creatorLabInfo}>
                  <div className={styles.infoHeader}>
                    <Info size={20} />
                    <h4>Creator Lab là gì?</h4>
                  </div>
                  <div className={styles.infoContent}>
                    <p>
                      Chương trình dành cho <strong>tất cả những ai yêu thích sáng tạo nội dung</strong>, 
                      mong muốn <strong>phát triển thương hiệu cá nhân</strong>, <strong>mở rộng cộng đồng</strong> 
                      và <strong>tăng thu nhập thực</strong> từ lượt vote có trả phí trên TingVote.
                    </p>              
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
          {activeTab === 1 && (
            <div className={styles.tabPanel}>
              <div className={styles.levelHeader}>
                <Trophy size={32} className={styles.headerIcon} />
                <div>
                  <h3 className={styles.panelTitle}>Hệ Thống Level</h3>
                  <p className={styles.panelDescription}>
                    11 cấp độ - Tổng thưởng <span className={styles.accent}>245M</span>
                  </p>
                </div>
              </div>

              <div className={styles.levelGrid}>
                {Object.entries(levelData).map(([key, level]) => (
                  <motion.div
                    key={key}
                    className={`${styles.levelCard} ${activeLevel === parseInt(key) ? styles.levelCardActive : ''}`}
                    onClick={() => setActiveLevel(parseInt(key))}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ 
                      borderColor: level.color,
                      '--level-color': level.color 
                    } as React.CSSProperties & { '--level-color': string }}
                  >
                    <div className={styles.levelHeader}>
                      <div className={styles.levelEmoji}>{level.emoji}</div>
                      <div className={styles.levelMeta}>
                        <div className={styles.levelNumber}>Level {key}</div>
                        <div className={styles.levelCategory}>{level.category}</div>
                      </div>
                      <div className={styles.levelStats}>
                        <div className={styles.levelValue} style={{ color: level.color }}>
                          {level.totalValue}
                        </div>
                        <div className={styles.levelCommission}>
                          HH: {level.commission}
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.levelMainContent}>
                      <div className={styles.levelTitle}>{level.title}</div>
                      <div className={styles.levelRequirement}>
                        <Target size={12} />
                        <span>{level.requirement}</span>
                      </div>
                      
                      <div className={styles.levelDetails}>
                        <div className={styles.detailSection}>
                          <div className={styles.detailLabel}>
                            <Info size={14} />
                            Nhiệm vụ
                          </div>
                          <div 
                            className={styles.levelTask}
                            dangerouslySetInnerHTML={{ __html: level.task }}
                          />
                        </div>
                        
                        <div className={styles.levelDivider}></div>
                        
                        <div className={styles.detailSection}>
                          <div className={styles.detailLabel}>
                            <Gift size={14} />
                            Phần thưởng
                          </div>
                          <div 
                            className={styles.levelReward}
                            dangerouslySetInnerHTML={{ __html: level.reward }}
                          />
                        </div>
                      </div>
                      
                      <div className={styles.levelFooter}>
                        <div className={styles.levelDifficulty}>
                          <div className={`${styles.difficultyBadge} ${styles[level.difficulty?.toLowerCase()?.replace(' ', '')]}`}>
                            {level.difficulty}
                          </div>
                          <div className={styles.timeframe}>
                            ⏱️ {level.timeframe}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {'isQueen' in level && level.isQueen && (
                      <div className={styles.queenBadge}>
                        <Crown size={14} />
                        <span>QUEEN</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
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
                    <span>10.000đ vote</span>
                    <ArrowRight size={16} />
                    <span className={styles.income}>2.000đ</span>
                  </div>
                  <div className={styles.exampleRow}>
                    <span>100.000đ vote</span>
                    <ArrowRight size={16} />
                    <span className={styles.income}>20.000đ</span>
                  </div>
                  <div className={styles.exampleRow}>
                    <span>1.000.000đ vote</span>
                    <ArrowRight size={16} />
                    <span className={styles.income}>200.000đ</span>
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
