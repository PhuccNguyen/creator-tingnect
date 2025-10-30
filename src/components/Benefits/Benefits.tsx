'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gift, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Lightbulb,
  ArrowRight,
  Sparkles,
  Target
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
      title: 'Thưởng 50K ngay',
      description: 'Nhận ngay khi đăng ký thành công',
      highlight: 'Tức thì',
      color: '#E7C873'
    },
    {
      icon: DollarSign,
      emoji: '💰',
      title: 'Thu nhập 20%',
      description: 'Chia thưởng từ vote trả phí',
      highlight: 'Thụ động',
      color: '#10B981'
    },
    {
      icon: TrendingUp,
      emoji: '📈',
      title: 'Phát triển brand',
      description: 'Xây dựng thương hiệu cá nhân',
      highlight: 'Dài hạn',
      color: '#2AF4FF'
    },
    {
      icon: Users,
      emoji: '👥',
      title: 'Cộng đồng Creator',
      description: 'Học hỏi từ mentor & đồng nghiệp',
      highlight: 'Miễn phí',
      color: '#8B5CF6'
    }
  ];

  return (
    <section className={styles.benefits}>
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
            <Sparkles size={16} />
            <span>Lợi ích vượt trội</span>
          </motion.div>

          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Tại sao nên chọn{' '}
            <span className={styles.highlight}>Creator Lab?</span>
          </motion.h2>

          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Những lợi ích thiết thực và cơ hội phát triển toàn diện dành riêng cho Creator
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={styles.benefitIcon} style={{ backgroundColor: `${benefit.color}15` }}>
                  <Icon size={24} style={{ color: benefit.color }} />
                  <span className={styles.benefitEmoji}>{benefit.emoji}</span>
                </div>
                
                <div className={styles.benefitContent}>
                  <div className={styles.benefitHeader}>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <span 
                      className={styles.benefitHighlight}
                      style={{ backgroundColor: benefit.color }}
                    >
                      {benefit.highlight}
                    </span>
                  </div>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <Target className={styles.ctaIcon} size={32} />
              <h3 className={styles.ctaTitle}>
                Bạn đã sẵn sàng trở thành Creator?
              </h3>
              <p className={styles.ctaText}>
                Đăng ký ngay để nhận thưởng 50K và bắt đầu hành trình kiếm tiền từ nội dung sáng tạo!
              </p>
            </div>
            
            <motion.button
              className={styles.ctaButton}
              onClick={handleRegisterClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Gift size={20} />
              <span>Nhận thưởng 50K ngay</span>
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;