'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gift } from 'lucide-react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const handleRegisterClick = () => {
    window.open('https://forms.gle/H3k58Cj1k7YWpSum9', '_blank');
  };

  const handleLearnMoreClick = () => {
    const element = document.getElementById('benefits');
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
        {/* LỚP 1: TRUST BAR - Thanh Uy Tín */}
        <motion.div 
          className={styles.trustBar}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.trustBarLeft}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/Image/logo/LOGO_TPA.png.png" 
                alt="TPA Logo" 
                width={220}
                height={120}
                className={styles.trustLogo}
              />
            </div>
            <div className={styles.logoDivider}></div>
            <div className={styles.logoWrapper}>
              <Image 
                src="/Image/logo/logo_hhsvhbvns.png" 
                alt="Hoa Hậu Sinh Viên Hòa Bình VN Logo" 
                width={120}
                height={60}
                className={styles.trustLogos}
              />
            </div>
          </div>
          <div className={styles.trustBarRight}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/Image/logo/logo TingVote.png" 
                alt="TingVote Logo" 
                width={150}
                height={60}
                className={styles.trustLogo}
              />
            </div>
          </div>
        </motion.div>

        {/* LỚP 2: HOOK BLOCK - Khối Sát Thủ */}
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            TRỞ THÀNH{' '}
            <span className={styles.highlight}>CREATOR</span>{' '}
            CỦA TINGVOTE
          </motion.h1>

          <motion.h2 
            className={styles.mainHook}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nhận ngay Gói Quyền Lợi Độc Quyền trị giá{' '}
            <span className={styles.priceHighlight}>39.500.000 VNĐ</span>
          </motion.h2>

          <motion.h3 
            className={styles.subHook}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Cùng cơ chế chia thưởng <span className={styles.percentage}>20% DOANH THU</span> không giới hạn từ lượt vote.
          </motion.h3>

          {/* CTA Buttons */}
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className={styles.primaryButton}
              onClick={handleRegisterClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.buttonIcon}>
                <Gift size={24} />
              </div>
              <div className={styles.buttonContent}>
                <span className={styles.buttonMain}>ĐĂNG KÝ NGAY</span>
                <span className={styles.buttonSub}>Nhận Gói 39 Triệu</span>
              </div>
            </motion.button>

            <motion.button
              className={styles.secondaryButton}
              onClick={handleLearnMoreClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowRight size={18} />
              <span>Xem chi tiết Gói Quyền Lợi</span>
            </motion.button>
          </motion.div>

          {/* LỚP 3: TRUST BADGE - Thanh Giải Thích */}
          <motion.div 
            className={styles.trustBadge}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className={styles.trustBadgeContent}>
              <span className={styles.trustBadgeText}>Một nền tảng thuộc hệ sinh thái</span>
              <div className={styles.trustBadgeLogosRow}>


                <div className={styles.trustBadgeLogoWrapper}>
                  <Image 
                    src="/Image/logo/tingnect-logo.png" 
                    alt="TingNect" 
                    width={120}
                    height={40}
                    className={styles.trustBadgeLogo}
                  />
                </div>

                <span className={styles.trustBadgeText}>phát triển bởi</span>
                <div className={styles.trustBadgeLogoWrapper}>
                  <Image 
                    src="/Image/logo/trustlabs-logos.png" 
                    alt="TrustLabs" 
                    width={120}
                    height={40}
                    className={styles.trustBadgeLogo}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;