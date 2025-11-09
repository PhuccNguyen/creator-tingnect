import { Sparkles, Gift, Rocket, Megaphone } from 'lucide-react';

export interface BenefitItem {
  icon: any;
  emoji: string;
  title: string;
  value: string;
  description: string;
  details?: {
    summary: string[];
    full: string[];
  };
  color: string;
}

export const benefits: BenefitItem[] = [
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
        '📊 Tổng: 33.288.000đ/tháng (1.109.600đ/ngày)'
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