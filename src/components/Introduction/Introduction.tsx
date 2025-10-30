'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gift, 
  Video, 
  BarChart3, 
  Percent,
  Sparkles,
  Users,
  Star,
  ArrowRight,
  CheckCircle2,
  Rocket
} from 'lucide-react';
import styles from './Introduction.module.css';

const Introduction: React.FC = () => {
  const handleRegisterClick = () => {
    window.open('https://forms.gle/H3k58Cj1k7YWpSum9', '_blank');
  };

  const benefits = [
    {
      icon: Gift,
      emoji: '🎁',
      title: 'Nhận 50.000đ thưởng ngay',
      description: 'Đăng ký qua Google Form và xác nhận thành công',
      highlight: 'Ngay lập tức',
      color: '#E7C873'
    },
        {
      icon: Percent,
      emoji: '💰',
      title: 'Nhận chia thưởng 20%',
      description: 'Doanh thu thực từ lượt vote có trả phí',
      highlight: 'Thu nhập ổn định',
      color: '#8B5CF6'
    },
    {
      icon: Star,
      emoji: '🏆',
      title: 'Phần thưởng hàng tuần cực hấp dẫn',
      description: 'Top creator xuất sắc nhất được tặng quà giá trị cao',
      highlight: 'Hấp dẫn',
      color: '#F59E0B'
    },
    {
      icon: Video,
      emoji: '🎬', 
      title: 'Học cách tạo nội dung thu hút',
      description: 'Tạo video và bài viết thu hút người bình chọn',
      highlight: 'Kỹ năng thực',
      color: '#2AF4FF'
    },
    {
      icon: BarChart3,
      emoji: '📊',
      title: 'Theo dõi số liệu trực tiếp',
      description: 'View – Vote – Thu nhập được theo dõi real-time',
      highlight: 'Minh bạch',
      color: '#10B981'
    }
  ];
  return (
    <section className={styles.introduction}>
      <div className={styles.container}>
        
        {/* Hero Introduction */}
        <motion.div 
          className={styles.hero}
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
            <span className={styles.highlight}>Creator Lab</span>{' '}
            là gì?
          </motion.h2>

          <motion.div 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className={styles.mainText}>
              Chương trình dành cho <strong>tất cả những ai yêu thích sáng tạo nội dung</strong>, 
              mong muốn phát triển thương hiệu cá nhân, mở rộng cộng đồng và{' '}
              <span className={styles.accent}>tăng thu nhập thực từ lượt vote có trả phí</span> trên TingVote.
            </p>
          </motion.div>
        </motion.div>
        {/* Benefits Section */}
        <motion.div 
          className={styles.benefitsSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className={styles.benefitsHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.benefitsTitle}>
              Tham gia chương trình, bạn sẽ:
            </h3>
            <p className={styles.benefitsSubtitle}>
              5 lợi ích cốt lõi giúp bạn thành công
            </p>
          </motion.div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className={styles.benefitCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.15) }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <div className={styles.benefitIcon} style={{ backgroundColor: `${benefit.color}15` }}>
                    <Icon size={24} style={{ color: benefit.color }} />
                    <span className={styles.benefitEmoji}>{benefit.emoji}</span>
                  </div>
                  
                  <div className={styles.benefitContent}>
                    <div className={styles.benefitHeader}>
                      <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                      <span 
                        className={styles.benefitBadge}
                        style={{ backgroundColor: benefit.color }}
                      >
                        {benefit.highlight}
                      </span>
                    </div>
                    <p className={styles.benefitDescription}>{benefit.description}</p>
                    <div className={styles.benefitCheck}>
                      <CheckCircle2 size={14} />
                      <span>Xác nhận đã tham gia</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              <Rocket size={32} />
            </div>
            <h3 className={styles.ctaTitle}>Sẵn sàng trở thành Creator chuyên nghiệp?</h3>
            <p className={styles.ctaText}>
              Tham gia ngay để nhận thưởng 50.000đ và bắt đầu hành trình kiếm tiền từ nội dung!
            </p>
            
            <motion.button
              className={styles.ctaButton}
              onClick={handleRegisterClick}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Gift size={18} />
              <span>Đăng ký nhận thưởng ngay</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;