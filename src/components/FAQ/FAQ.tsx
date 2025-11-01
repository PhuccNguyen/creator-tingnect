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
      question: 'Gói 39.5 Triệu có thực sự miễn phí không?',
      answer: 'Có! Bạn nhận MIỄN PHÍ: Thưởng 50K tiền mặt + Gói Vote 200K + Hỗ trợ Truyền thông 5.95M. Riêng Gói Tool AI (33.28M) bạn chỉ trả phí kích hoạt 689K thay vì giá gốc 33.97M - tiết kiệm 98%!',
      color: '#F59E0B'
    },
    {
      icon: CreditCard,
      emoji: '💰',
      question: 'Khi nào tôi nhận được 50.000đ tiền thưởng?',
      answer: 'Ngay sau khi hoàn tất 4 bước: (1) Đăng ký qua form, (2) Hoàn thiện hồ sơ, (3) Follow các kênh TingVote, (4) Tham gia group Creator Lab. Sau đó liên hệ fanpage TingVote để xác nhận và nhận thưởng vào ví.',
      color: '#10B981'
    },
    {
      icon: Percent,
      emoji: '�',
      question: 'Cơ chế chia thưởng 20% hoạt động như thế nào?',
      answer: 'Mỗi lượt vote trả phí của fan cho bạn, TingVote tự động tính và chuyển 20% doanh thu vào ví Creator của bạn. Minh bạch, tự động, không giới hạn số lần nhận thưởng!',
      color: '#E7C873'
    },
    {
      icon: Users,
      emoji: '👥',
      question: 'Tôi chưa có follower, có được tham gia không?',
      answer: 'Tất nhiên! Creator Lab dành cho MỌI NGƯỜI - từ người mới bắt đầu đến Creator chuyên nghiệp. Chúng tôi có mentor, cộng đồng và công cụ hỗ trợ bạn phát triển từ con số 0.',
      color: '#3B82F6'
    },
    {
      icon: Smartphone,
      emoji: '🎬',
      question: 'Tôi cần tạo nội dung gì để nhận vote?',
      answer: 'Bất kỳ nội dung nào bạn đam mê: video TikTok/Reels, bài viết Facebook, livestream, vlog YouTube... Chỉ cần giới thiệu bản thân, kêu gọi vote và gắn link bình chọn của bạn!',
      color: '#8B5CF6'
    },
    {
      icon: Infinity,
      emoji: '🚀',
      question: 'Có giới hạn thu nhập từ vote không?',
      answer: 'KHÔNG! Bạn nhận 20% KHÔNG GIỚI HẠN từ mỗi lượt vote trả phí. Càng nhiều fan ủng hộ, càng nhiều thu nhập. Top Creator có thể kiếm hàng chục triệu mỗi tháng!',
      color: '#DC2626'
    },
    {
      icon: CreditCard,
      emoji: '💳',
      question: 'Làm sao để rút tiền thưởng?',
      answer: 'Tiền thưởng tự động vào Ví Creator TingVote. Bạn có thể rút về tài khoản ngân hàng khi đạt ngưỡng tối thiểu (thường 100K-500K) theo chu kỳ định kỳ hàng tuần/tháng.',
      color: '#059669'
    },
    {
      icon: MessageCircle,
      emoji: '📱',
      question: 'Tôi cần hỗ trợ thì liên hệ ai?',
      answer: 'Fanpage TingVote hỗ trợ 24/7! Ngoài ra, bạn còn có cộng đồng Creator Lab trên Facebook với hàng trăm Creator và Mentor sẵn sàng giúp đỡ, chia sẻ kinh nghiệm.',
      color: '#2AF4FF'
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
            Những câu hỏi quan trọng về <span className={styles.highlight}>Gói 39 Triệu</span> và cách kiếm thu nhập
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
              Còn câu hỏi nào khác? <span className={styles.contactHighlight}>Hỏi ngay!</span>
            </h3>
            
            <p className={styles.contactText}>
              Đội ngũ TingVote và cộng đồng Creator Lab luôn sẵn sàng hỗ trợ bạn 24/7
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
                  <span className={styles.contactButtonMain}>ĐĂNG KÝ NGAY</span>
                  <span className={styles.contactButtonSub}>Nhận Gói 39 Triệu & Hỏi Trực Tiếp</span>
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