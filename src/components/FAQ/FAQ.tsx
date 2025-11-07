'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  HelpCircle, 
  MessageCircle, 
  Mail,
  Gift,
  Percent,
  Users,
  Smartphone,
  CreditCard,
  Infinity,
  ExternalLink
} from 'lucide-react';
import styles from './FAQ.module.css';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleContactClick = () => {
    window.open('https://forms.gle/H3k58Cj1k7YWpSum9', '_blank');
  };

  const faqs = [
    {
      icon: Gift,
      emoji: '🎁',
      question: 'Gói Creator Lab 39.338 Triệu có thực sự miễn phí 100% không?',
      answer: 'CÓ! MIỄN PHÍ 100% NHƯNG PHẢI LÀM TASK: ✅ Bộ Công Cụ AI Sáng Tạo 33.288M (Canva Pro, ChatGPT Premium, Gamma AI, Global GPT, Midjourney, Pikbest, Lovepik + 20+ tools) - MỞ KHÓA THEO LEVEL ✅ Thưởng nóng 50K tiền mặt khi hoàn thành Level 1 ✅ 200 Vote khởi động theo Level 2 (200K) ✅ PR Truyền thông 5.9M theo Level cao ✅ Hệ thống Level 245M thưởng ✅ Weekly Champion 39M/tuần. KHÔNG tốn tiền NHƯNG PHẢI hoàn thành task từng Level để mở khóa!',
      color: '#F59E0B'
    },
    {
      icon: CreditCard,
      emoji: '💰',
      question: 'Khi nào và làm sao tôi nhận được đầy đủ gói 39.338M?',
      answer: 'QUY TRÌNH NHẬN TỪNG PHẦN: 🔥 Level 0 (Đăng ký): Link vote cá nhân + Dashboard doanh thu (1.5M) 🔥 Level 1 (3 tương tác): 50.000đ tiền mặt + 100 Vote tặng (150K) 🔥 Level 2 (Kết nối): 200 Vote tặng + Huy hiệu Connector (300K) 🔥 Level 3+ (Content): Từng phần công cụ AI Premium (Canva Pro, ChatGPT Premium, Gamma, Midjourney, Global GPT...) được mở khóa theo level 🔥 Hoàn thành đủ Level: Truy cập TOÀN BỘ 20+ công cụ trị giá 33.288M + PR package 5.9M. PHẢI LÀM TASK CHỨ KHÔNG MIỄN PHÍ NGAY!',
      color: '#10B981'
    },
    {
      icon: Percent,
      emoji: '💎',
      question: 'Hoa hồng 20-22% hoạt động cụ thể như thế nào?',
      answer: 'HỆ THỐNG TỰ ĐỘNG MINH BẠCH: 💰 Cơ bản: 20% hoa hồng từ mỗi vote trả phí ví dụ fan vote 10.000đ → bạn nhận 2.000đ 💎 Level 6+: Tăng lên 21% (khi đạt 15.000 vote trả phí - 15M doanh thu) 💎 Level 7+: Tăng lên 22% (khi đạt 30.000 vote trả phí - 30M doanh thu) 👑 Level 10 Miss Creator: Danh hiệu đặc biệt theo mùa (chỉ 1 người/mùa) ⚡ Thanh toán: Chủ Nhật chốt sổ → Thứ 3 chuyển khoản ⚡ Điều kiện: Tối thiểu 100 vote mới/tuần ⚡ Minh bạch 100%: Dashboard theo dõi real-time, KHÔNG che giấu!',
      color: '#E7C873'
    },
    {
      icon: Users,
      emoji: '👥',
      question: 'Tôi chưa có follower/kinh nghiệm, có tham gia được không?',
      answer: 'HOÀN TOÀN ĐƯỢC - Bắt đầu từ Level 0: 🚀 Người mới (0 follower): Bắt đầu từ Level 0 → Level 1 rất dễ (chỉ 3 tương tác) → Từng bước mở khóa công cụ AI 🚀 Level 0: Nhận link vote + dashboard miễn phí 🚀 Level 1: 50K tiền mặt + 100 vote + hướng dẫn tạo content 🚀 Level 2+: Từng phần công cụ AI (Canva Pro, ChatGPT...) mở khóa theo tiến độ 🚀 Hỗ trợ miễn phí: Group 1000+ creators, mentor 1-1, roadmap chi tiết từ A-Z. BẮT ĐẦU DỄ DÀNG - LÀM TASK ĐỂ MỞ KHÓA!',
      color: '#3B82F6'
    },
    {
      icon: Smartphone,
      emoji: '🎬',
      question: 'Tôi cần làm gì để hoàn thành Level 1 và bắt đầu kiếm tiền?',
      answer: 'Level 1 RẤT DỄ - Chỉ cần tương tác: 💬 Thực hiện 3 hành động bất kỳ trên 1 trong 3 bài post đã ghim của TingVote: Like ❤️, Share 🔁, Comment ✍️ (nội dung khích lệ, tích cực). 🔍 Tìm bài post tại Fanpage TingVote � Phần thưởng: 50.000đ tiền mặt (chuyển khoản trong 24h) + 100 Vote tặng 📱 Sau đó tạo content bất kỳ: TikTok, Facebook, Instagram với hashtag #TingVote #CreatorLab + tag @TingVote + link cá nhân → Fan vote ủng hộ → Nhận 20% hoa hồng tự động!',
      color: '#8B5CF6'
    },
    {
      icon: Infinity,
      emoji: '🚀',
      question: 'Có giới hạn thu nhập, phí ẩn hay ràng buộc hợp đồng không?',
      answer: 'KHÔNG GIỚI HẠN - KHÔNG PHÍ ẨN - KHÔNG RÀNG BUỘC: 💸 Thu nhập: KHÔNG giới hạn 💸 Hoa hồng: 20% cơ bản, tăng lên 21% (Level 6+), 22% (Level 7+) - Level 10 Miss Creator là danh hiệu đặc biệt theo mùa 💸 Gói 39.338M: MIỄN PHÍ SUỐT ĐỜI 💸 Rút tiền: MIỄN PHÍ từ 100K trở lên 💸 Hợp đồng: KHÔNG ràng buộc, thoát bất cứ lúc nào 💸 Chi phí vận hành: 0đ (server, bandwidth, support đều free) ✅ Cam kết minh bạch 100% - Dashboard real-time - Báo cáo chi tiết!',
      color: '#DC2626'
    },
    {
      icon: CreditCard,
      emoji: '💳',
      question: 'Quy trình rút tiền hoa hồng miễn phí như thế nào?',
      answer: 'QUY TRÌNH TỰ ĐỘNG - MIỄN PHÍ 100%: 📊 Theo dõi: Dashboard real-time shows doanh thu + hoa hồng 💰 Tích lũy: Hoa hồng 20-25% tự động vào Ví Creator mỗi vote 📅 Chu kỳ: Chủ Nhật 23:59 chốt sổ → Thứ 3 chuyển khoản 💳 Rút tiền: MIỄN PHÍ từ 100.000đ trở lên về bank account 🏦 Ngân hàng hỗ trợ: Vietcombank, BIDV, Techcombank, MB, ACB, Sacombank, VPBank... ⚡ Thời gian: 24-48h tiền về tài khoản ✅ KHÔNG mất phí chuyển khoản, phí giao dịch hay bất kỳ khoản cắt giảm nào!',
      color: '#059669'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <HelpCircle size={16} />
            <span>FAQ</span>
          </motion.div>

          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Giải đáp{' '}
            <span className={styles.highlight}>mọi thắc mắc</span>
          </motion.h2>

          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Những câu hỏi quan trọng về <span className={styles.highlight}>3 Hệ Thống Thưởng Độc Lập</span>: Creator Lab 39.338M + Level System 245M + Weekly Champion 39M + Hoa hồng 20-22%
          </motion.p>
        </motion.div>

        {/* FAQ List */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <motion.div
                key={index}
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.faqQuestion}>
                  <div className={styles.questionLeft}>
                    <div 
                      className={styles.questionIcon}
                      style={{ backgroundColor: `${faq.color}15` }}
                    >
                      <Icon size={16} style={{ color: faq.color }} />
                      <span className={styles.questionEmoji}>{faq.emoji}</span>
                    </div>
                    <h3 className={styles.questionText}>{faq.question}</h3>
                  </div>
                  
                  <ChevronDown 
                    className={`${styles.chevronIcon} ${activeIndex === index ? styles.rotate : ''}`}
                    size={20}
                  />
                </div>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className={styles.faqAnswer}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Section */}
        <motion.div 
          className={styles.contactSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.contactCard}>
            <div className={styles.contactIconCircle}>
              <MessageCircle size={36} />
            </div>
            
            <h3 className={styles.contactTitle}>
              Còn thắc mắc gì khác? <span className={styles.contactHighlight}>Nhận Gói 39 Triệu ngay!</span>
            </h3>
            
            <p className={styles.contactText}>
              Hỗ trợ miễn phí 24/7 từ đội ngũ TingVote và cộng đồng 1000+ Creator Lab
            </p>

            <div className={styles.contactActions}>
              <motion.button
                className={styles.contactButton}
                onClick={handleContactClick}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Gift size={24} />
                <div className={styles.contactButtonContent}>
                  <span className={styles.contactButtonMain}>NHẬN MIỄN PHÍ NGAY</span>
                  <span className={styles.contactButtonSub}>Gói 39 Triệu + Hỗ Trợ Trọn Đời</span>
                </div>
                <ExternalLink size={20} />
              </motion.button>

              <div className={styles.contactInfo}>
                <Mail size={16} />
                <span>Hoặc email: contact@tingvote.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;