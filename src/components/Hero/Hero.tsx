'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Gift } from 'lucide-react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const handleRegisterClick = () => {
    window.open('https://forms.gle/H3k58Cj1k7YWpSum9', '_blank');
  };

  const handleLearnMoreClick = () => {
    const element = document.getElementById('introduction');
    if (element) {
      const headerHeight = window.innerWidth <= 768 ? 70 : 80;
      const elementPosition = element.offsetTop - headerHeight - 10;
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      });
    }
  };

  // Tạo array các đóm lửa với vị trí và timing ngẫu nhiên
  const fireflies = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2, // 2-6px
    initialX: Math.random() * 100, // 0-100%
    initialY: Math.random() * 100, // 0-100%
    duration: Math.random() * 10 + 15, // 15-25s
    delay: Math.random() * 5, // 0-5s delay
    opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7
  }));

  return (
    <section className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.heroBackground}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
        <div className={styles.gridPattern}></div>
        
        {/* Floating Fireflies */}
        <div className={styles.firefliesContainer}>
          {fireflies.map((firefly) => (
            <motion.div
              key={firefly.id}
              className={styles.firefly}
              style={{
                width: firefly.size,
                height: firefly.size,
                left: `${firefly.initialX}%`,
                top: `${firefly.initialY}%`,
                opacity: firefly.opacity,
              }}
              animate={{
                x: [0, 100, -50, 80, 0],
                y: [0, -80, 60, -40, 0],
                scale: [1, 1.2, 0.8, 1.1, 1],
                opacity: [firefly.opacity, firefly.opacity * 1.5, firefly.opacity * 0.5, firefly.opacity * 1.2, firefly.opacity],
              }}
              transition={{
                duration: firefly.duration,
                delay: firefly.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        {/* Main Content */}
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Đăng Ký{' '}
            <span className={styles.highlight}>Creator Labs</span>{' '}
            Ngay
          </motion.h1>

          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sáng tạo nội dung, nhận thưởng thật từ lượt vote!
          </motion.p>

          <motion.div 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Đăng ký ngay để nhận <strong className={styles.reward}>thưởng 50.000đ</strong> (dành cho thí sinh đã tham gia các cuộc thi & sự kiện trên TingVote.com)
            </p>
            <p>
              <strong className={styles.highlight}>🏆 Phần thưởng hàng tuần cực hấp dẫn</strong> cho những creator xuất sắc nhất! 
              Cùng với cơ chế chia thưởng <strong className={styles.percentage}>20% doanh thu</strong> từ lượt vote trả phí.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className={styles.primaryButton}
              onClick={handleRegisterClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Gift size={20} />
              <span>Đăng ký ngay qua Google Form</span>
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              className={styles.secondaryButton}
              onClick={handleLearnMoreClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={18} />
              <span>Tìm hiểu quy trình tham gia</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;