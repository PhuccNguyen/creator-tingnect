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
      question: 'Khi nào tôi nhận được thưởng 50.000đ?',
      answer: 'Ngay sau khi hoàn tất đăng ký qua Google Form và xác nhận qua fanpage TingVote. Bạn chỉ cần gửi tin nhắn đến fanpage với thông tin đăng ký để nhận thưởng.',
      color: '#E7C873'
    },
    {
      icon: Percent,
      emoji: '💰',
      question: 'Làm sao để nhận chia thưởng 20%?',
      answer: 'Hệ thống tự động tính và phân bổ 20% doanh thu từ lượt vote có trả phí vào ví Creator của bạn. Bạn không cần làm gì thêm, chỉ cần tập trung sáng tạo nội dung và thu hút lượt vote.',
      color: '#10B981'
    },
    {
      icon: Users,
      emoji: '👥',
      question: 'Tôi chưa có nhiều người theo dõi, có thể tham gia không?',
      answer: 'Hoàn toàn có thể! Creator Labs chào đón mọi cá nhân yêu thích sáng tạo, dù là người mới hay Creator chuyên nghiệp. Chúng tôi sẽ hỗ trợ bạn phát triển từ đầu.',
      color: '#2AF4FF'
    },
    {
      icon: Smartphone,
      emoji: '📱',
      question: 'Tôi cần chuẩn bị gì trước khi đăng ký?',
      answer: 'Bạn chỉ cần có tài khoản mạng xã hội (Facebook, TikTok, Instagram hoặc YouTube), đam mê sáng tạo nội dung và sẵn sàng học hỏi. Phần còn lại, TingVote sẽ hỗ trợ bạn!',
      color: '#8B5CF6'
    },
    {
      icon: CreditCard,
      emoji: '💳',
      question: 'Tôi có thể rút tiền thưởng như thế nào?',
      answer: 'Số tiền thưởng sẽ được chuyển vào ví của bạn. Bạn có thể rút tiền theo chu kỳ thanh toán định kỳ của hệ thống hoặc khi đạt ngưỡng tối thiểu.',
      color: '#F59E0B'
    },
    {
      icon: Infinity,
      emoji: '♾️',
      question: 'Có giới hạn về số lượng nội dung tôi có thể tạo không?',
      answer: 'Không có giới hạn! Bạn càng sáng tạo nhiều nội dung chất lượng, càng có nhiều cơ hội thu hút vote và tăng thu nhập. TingVote khuyến khích sự sáng tạo không giới hạn.',
      color: '#DC2626'
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
            Câu hỏi{' '}
            <span className={styles.highlight}>thường gặp</span>
          </motion.h2>

          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Xử lý các rào cản và thắc mắc cuối cùng của bạn
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
            <MessageCircle className={styles.contactIcon} size={32} />
            
            <h3 className={styles.contactTitle}>
              Vẫn còn thắc mắc?
            </h3>
            
            <p className={styles.contactText}>
              Đội ngũ TingVote luôn sẵn sàng hỗ trợ bạn 24/7
            </p>

            <div className={styles.contactActions}>
              <motion.button
                className={styles.contactButton}
                onClick={handleContactClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Đăng ký và hỏi ngay</span>
                <ExternalLink size={16} />
              </motion.button>

              <div className={styles.contactInfo}>
                <Mail size={16} />
                <span>contact@tingvote.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;