export interface CommissionRule {
  icon: string;
  title: string;
  content: string;
}

export interface CommissionInfo {
  title: string;
  items: CommissionRule[];
}

export const commissionInfo: CommissionInfo = {
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