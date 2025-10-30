'use client';

import React from 'react';
import styles from './CTA.module.css';
import { FaRocket, FaArrowRight } from 'react-icons/fa';

const CTA: React.FC = () => {
  const handleRegisterClick = () => {
    window.open('https://forms.gle/H3k58Cj1k7YWpSum9', '_blank');
  };

  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContainer}>
          <div className={styles.ctaBackground}>
            <div className={styles.orb1}></div>
            <div className={styles.orb2}></div>
            <div className={styles.orb3}></div>
          </div>

          <div className={styles.ctaContent}>
            <FaRocket className={styles.rocketIcon} />
            
            <h2 className={styles.ctaTitle}>
              Sẵn sàng trở thành Creator và bắt đầu hành trình tăng thu nhập?
            </h2>
            
            <p className={styles.ctaDescription}>
              Đăng ký ngay hôm nay qua Google Form, nhận thưởng khởi động{' '}
              <strong>50.000đ</strong> và chia thưởng <strong>20%</strong> từ lượt vote
            </p>

            <div className={styles.ctaFeatures}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✅</span>
                <span>Miễn phí tham gia</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✅</span>
                <span>Hỗ trợ đào tạo</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✅</span>
                <span>Thu nhập thật</span>
              </div>
            </div>

            <button 
              className={styles.ctaButton}
              onClick={handleRegisterClick}
            >
              <span>Đăng ký ngay - Nhận thưởng 50K</span>
              <FaArrowRight className={styles.arrowIcon} />
            </button>

            <p className={styles.ctaNote}>
              🎁 Ưu đãi đặc biệt dành cho thí sinh đã tham gia các cuộc thi & sự kiện trên TingVote.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;