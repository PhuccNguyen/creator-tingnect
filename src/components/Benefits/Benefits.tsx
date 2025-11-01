'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gift, 
  Rocket,
  Megaphone,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import styles from './Benefits.module.css';

const Benefits: React.FC = () => {
  const handleRegisterClick = () => {
    window.open('https://forms.gle/H3k58Cj1k7YWpSum9', '_blank');
  };

  const benefits = [
    {
      icon: Gift,
      emoji: '🎁',
      title: 'Thưởng Nóng Tiền Mặt',
      value: '50.000 VNĐ',
      description: 'Thưởng ngay 50K tiền mặt vào Ví Creator của bạn ngay sau khi đăng ký được duyệt.',
      color: '#F59E0B'
    },
    {
      icon: Rocket,
      emoji: '🚀',
      title: 'Gói Vote Khởi Động',
      value: '200.000 VNĐ',
      description: 'Tặng 200 lượt vote (trị giá 200K) làm "vốn" để bạn tạo đà chiến dịch hoặc tặng cho fan.',
      color: '#10B981'
    },
    {
      icon: Megaphone,
      emoji: '📢',
      title: 'Gói Hỗ Trợ Truyền Thông',
      value: '5.950.000 VNĐ',
      description: 'Creator xuất sắc sẽ được vinh danh và quảng bá trên các kênh media chính thức của TingVote.',
      color: '#3B82F6'
    },
    {
      icon: Sparkles,
      emoji: '💎',
      title: 'Voucher Giảm 98% - Gói Tool AI & Khoá Học',
      value: '33.288.000 VNĐ',
      description: 'Tặng Voucher giảm 98% để bạn mua gói Tool AI + Khoá học (giá gốc 33.97 triệu) chỉ còn 689K.',
      details: [
        '🎨 Sáng tạo nội dung: Canva Pro, Global GPT (24 AI), Midjourney, Click AI, 1minAI...',
        '🎬 Giáo dục & Giải trí: ChatGPT, Capcut Pro, Netflix, Spotify, Youtube Premium...',
        '📚 Kho tài liệu (Tặng): 15.000+ khoá học, 1000+ tài liệu AI, 1 triệu+ tài liệu tổng hợp...'
      ],
      color: '#8B5CF6'
    }
  ];

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        {/* PHẦN A: Giới thiệu Creator Lab */}
        <motion.div 
          className={styles.introSection}
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
            <Sparkles size={16} />
            <span>Giới thiệu chương trình</span>
          </motion.div>

          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className={styles.highlight}>Creator Lab</span> là gì?
          </motion.h2>

          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Chương trình dành cho tất cả những ai yêu thích sáng tạo nội dung, mong muốn phát triển thương hiệu cá nhân, mở rộng cộng đồng và <span className={styles.accent}>tăng thu nhập thực từ lượt vote có trả phí</span> trên TingVote.
          </motion.p>
        </motion.div>

        {/* PHẦN B: Chứng Minh Gói 39.5 Triệu */}
        <motion.div 
          className={styles.packageSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.packageTitle}>
            Gói Quyền Lợi 39.5 Triệu Bao Gồm Những Gì?
          </h3>
          <p className={styles.packageDescription}>
            Đây là 4 quyền lợi cốt lõi bạn nhận được ngay khi tham gia. <span className={styles.totalValue}>(Tổng giá trị: 39.488.000 VNĐ)</span>
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isSpecial = index === 3; // Card cuối cùng đặc biệt
            
            return (
              <motion.div
                key={index}
                className={`${styles.benefitCard} ${isSpecial ? styles.benefitCardSpecial : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={styles.benefitIconWrapper}>
                  <div className={styles.benefitIcon} style={{ backgroundColor: `${benefit.color}20` }}>
                    <span className={styles.benefitEmoji}>{benefit.emoji}</span>
                  </div>
                </div>
                
                <div className={styles.benefitContent}>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <span 
                    className={styles.benefitValue}
                    style={{ backgroundColor: benefit.color }}
                  >
                    {benefit.value}
                  </span>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                  
                  {benefit.details && (
                    <ul className={styles.benefitDetails}>
                      {benefit.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section - Nhấn Mạnh 39 Triệu */}
        <motion.div 
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaCard}>
            <div className={styles.ctaIconCircle}>
              <Gift size={36} />
            </div>
            <h3 className={styles.ctaTitle}>
              Sẵn sàng nhận <span className={styles.ctaHighlight}>Gói 39 Triệu</span>?
            </h3>
            <p className={styles.ctaText}>
              Đăng ký ngay để kích hoạt toàn bộ quyền lợi và bắt đầu kiếm tiền từ nội dung sáng tạo!
            </p>
            
            <motion.button
              className={styles.ctaButton}
              onClick={handleRegisterClick}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Gift size={24} />
              <div className={styles.ctaButtonContent}>
                <span className={styles.ctaButtonMain}>ĐĂNG KÝ NGAY</span>
                <span className={styles.ctaButtonSub}>Nhận Gói 39 Triệu</span>
              </div>
              <ArrowRight size={22} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;