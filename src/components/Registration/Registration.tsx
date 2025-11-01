'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gift, CheckCircle, ExternalLink, Zap, Users } from 'lucide-react';
import styles from './Registration_new.module.css';

const Registration: React.FC = () => {
  const handleRegisterClick = () => {
    window.open('https://forms.gle/H3k58Cj1k7YWpSum9', '_blank');
  };

  const benefits = [
    { icon: '🎁', text: 'Miễn phí 100% - Không tốn bất kỳ chi phí nào' },
    { icon: '⚡', text: 'Nhận 50K thưởng trong vòng 24 giờ' },
    { icon: '🎯', text: 'Truy cập miễn phí công cụ trị giá 33.28 Triệu' },
    { icon: '💰', text: 'Chia 20% doanh thu - Kiếm tiền không giới hạn' }
  ];

  return (
    <section id="registration" className={styles.registration}>
      <div className={styles.container}>
        {/* Main Card */}
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Icon Circle */}
          <motion.div 
            className={styles.iconCircle}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
            viewport={{ once: true }}
          >
            <Gift size={56} strokeWidth={2.5} />
          </motion.div>

          {/* Title */}
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sẵn sàng nhận <span className={styles.highlight}>Gói 39 Triệu</span><br />
            và bắt đầu kiếm tiền ngay hôm nay?
          </motion.h2>

          {/* Description */}
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Chỉ mất <strong>2 phút</strong> để đăng ký. Nhận ngay <strong className={styles.moneyHighlight}>50K thưởng</strong> và bắt đầu hành trình kiếm thu nhập từ nội dung sáng tạo!
          </motion.p>

          {/* Benefits Grid */}
          <motion.div 
            className={styles.benefits}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className={styles.benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={styles.benefitIcon}>
                  <span>{benefit.icon}</span>
                  <CheckCircle size={16} className={styles.checkIcon} />
                </div>
                <span className={styles.benefitText}>{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className={styles.ctaButton}
            onClick={handleRegisterClick}
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Gift size={28} strokeWidth={2.5} />
            <div className={styles.buttonContent}>
              <div className={styles.buttonMain}>ĐĂNG KÝ MIỄN PHÍ NGAY</div>
              <div className={styles.buttonSub}>Nhận Gói 39 Triệu + 50K Thưởng</div>
            </div>
            <ExternalLink size={22} />
          </motion.button>

          {/* Trust Badges */}
          <motion.div 
            className={styles.trustBadges}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.badge}>
              <Users size={18} />
              <span><strong>87 Creator</strong> đã tham gia</span>
            </div>
            <div className={styles.badge}>
              <Zap size={18} />
              <span>Chỉ còn <strong>13 suất</strong> cuối!</span>
            </div>
          </motion.div>

          {/* Security Notice */}
          <p className={styles.securityNote}>
            🔒 Thông tin của bạn được bảo mật 100% | ⚡ Duyệt trong vòng 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;