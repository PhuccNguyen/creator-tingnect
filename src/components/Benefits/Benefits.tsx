'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, 
  Rocket,
  Megaphone,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import styles from './Benefits.module.css';

const Benefits: React.FC = () => {
  const [showAllTools, setShowAllTools] = useState(false);
  
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
      description: 'Creator xuất sắc sẽ được hỗ trợ chạy Ads bài đăng có lượt tương tác cao và đưa thông tin lên toàn bộ kênh Social của TingVote & HHSVHBVN.',
      color: '#3B82F6'
    },
    {
      icon: Sparkles,
      emoji: '💎',
      title: 'Bộ Công Cụ Sáng Tạo Nội Dung - FREE',
      value: '33.288.000 VNĐ',
      description: 'Bạn nhận MIỄN PHÍ (33.288.000 VNĐ/tháng = 1.109.000 VNĐ/ngày) tất cả tài khoản sau:',
      details: [
        '✅ Canva Pro - Thiết kế chuyên nghiệp',
        '✅ Canva EDU Pro - Phiên bản giáo dục',
        '✅ ChatGPT Premium',
        '✅ Grammarly App - Sửa lỗi tiếng Anh',
        '✅ Pikbest.com - 10 triệu+ ảnh/template',
        '✅ Lovepik.com - 2.2 triệu+ tài nguyên thiết kế',
        '✅ Capcut Pro - Chỉnh sửa video',
        '✅ Global GPT - 24 AI đỉnh cao (ChatGPT-4, Claude, Gemini, Copilot, Perplexity...)',
        '✅ Click AI - Tạo nội dung tự động',
        '✅ 1minAI - Tạo video AI nhanh',
        '✅ Midjourney - Tạo hình ảnh AI đẳng cấp',
        '✅ Netflix Premium - Xem phim không giới hạn',
        '✅ Spotify Premium - Nghe nhạc không quảng cáo',
        '✅ Youtube Premium - Xem video không quảng cáo',
        '✅ 15.000+ khóa học online đỉnh cao',
        '✅ 1.000+ khóa học diễn giả nổi tiếng (cập nhật 2025)',
        '✅ 1.000+ tài liệu AI chuyên sâu',
        '✅ 1 triệu+ tài liệu tổng hợp 30 lĩnh vực',
        '✅ 200GB học liệu chuyên sâu',
        '💎 Tổng: 33.288.000 VNĐ/tháng'
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
                  
                  {benefit.details && isSpecial ? (
                    <div className={styles.toolsPackage}>
                      <div className={styles.packageBadge}>
                        <span className={styles.badgeIcon}>👑</span>
                        <span className={styles.badgeText}>DÀNH RIÊNG CHO CREATOR</span>
                      </div>
                      
                      <div className={styles.priceHighlight}>
                        <span className={styles.priceLabel}>Giá trị gói:</span>
                        <span className={styles.priceAmount}>33.288.000đ/tháng</span>
                        <span className={styles.priceDaily}>≈ 1.109.600đ/ngày</span>
                      </div>

                      <ul className={`${styles.benefitDetails} ${showAllTools ? styles.showAll : styles.showPreview}`}>
                        {benefit.details.map((detail, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            {detail}
                          </motion.li>
                        ))}
                      </ul>

                      <button 
                        className={styles.seeMoreButton}
                        onClick={() => setShowAllTools(!showAllTools)}
                      >
                        <span>{showAllTools ? 'Thu gọn' : 'Xem tất cả công cụ'}</span>
                        {showAllTools ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                  ) : benefit.details ? (
                    <ul className={styles.benefitDetails}>
                      {benefit.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  ) : null}
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