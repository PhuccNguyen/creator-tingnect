'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserPlus, 
  Users, 
  Lightbulb, 
  Megaphone, 
  BarChart3, 
  Trophy,
  ArrowRight,
  CheckCircle,
  Target,
  Clock,
  ChevronDown,
  Gift
} from 'lucide-react';
import styles from './Steps.module.css';

const Steps: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleRegisterClick = () => {
    window.open('https://forms.gle/H3k58Cj1k7YWpSum9', '_blank');
  };

  const steps = [
    {
      number: 1,
      icon: UserPlus,
      emoji: '📝',
      title: 'Đăng ký & Onboard',
      shortTitle: 'Đăng ký',
      description: 'Hoàn thiện hồ sơ và tham gia cộng đồng',
      time: '10 phút',
      color: '#E7C873',
      details: [
        'Điền thông tin đăng ký qua Google Form Creator Labs',
        'Hoàn thiện hồ sơ cá nhân (ảnh đại diện, mô tả ngắn, liên kết mạng xã hội)',
        'Follow toàn bộ các kênh chính thức của TingVote (Facebook, TikTok, Instagram, YouTube)',
        'Tham gia cộng đồng Creator Labs trên Facebook'
      ],
      goal: '🎁 Sau khi hoàn tất, liên hệ fanpage TingVote để nhận thưởng 50.000đ'
    },
    {
      number: 2,
      icon: Users,
      emoji: '🤝',
      title: 'Tương tác',
      shortTitle: 'Tương tác',
      description: 'Kết nối với cộng đồng Creator',
      time: '15 phút',
      color: '#2AF4FF',
      details: [
        'Tương tác trên các bài đăng chính thức của TingVote (like, comment, chia sẻ)',
        'Giới thiệu bản thân trong nhóm Creator Lab để được mentor và các thành viên khác biết đến'
      ],
      goal: '🎯 Tạo kết nối và được nhận diện trong cộng đồng'
    },
    {
      number: 3,
      icon: Lightbulb,
      emoji: '🎬',
      title: 'Sáng tạo nội dung',
      shortTitle: 'Sáng tạo',
      description: 'Tạo nội dung giới thiệu bản thân',
      time: '30 phút',
      color: '#10B981',
      details: [
        'Đăng 1 video ngắn (TikTok hoặc Reels) giới thiệu bản thân, hành trình hoặc mục tiêu tham gia',
        'Đăng 1 bài viết kêu gọi vote kèm hashtag #TingVote và gắn link bình chọn cá nhân'
      ],
      goal: '🎯 Ra mắt hình ảnh Creator và thu hút lượt bình chọn đầu tiên'
    },
    {
      number: 4,
      icon: Megaphone,
      emoji: '📢',
      title: 'Gọi vote & lan tỏa',
      shortTitle: 'Lan tỏa',
      description: 'Mở rộng phạm vi tiếp cận',
      time: 'Hàng ngày',
      color: '#8B5CF6',
      details: [
        'Chia sẻ link bình chọn cá nhân lên Facebook, TikTok, Instagram, Threads',
        'Khuyến khích người ủng hộ bình chọn và chia sẻ lại bài viết',
        'Livestream hoặc collab với Creator khác để mở rộng phạm vi tiếp cận'
      ],
      goal: '🎯 Tăng lượt xem, lượt vote và thu nhập từ lượt bình chọn thật'
    },
    {
      number: 5,
      icon: BarChart3,
      emoji: '📊',
      title: 'Theo dõi & Thống kê',
      shortTitle: 'Thống kê',
      description: 'Phân tích hiệu suất nội dung',
      time: 'Theo tuần',
      color: '#F59E0B',
      details: [
        'Theo dõi view, vote, doanh thu trực tiếp qua dashboard Creator của TingVote',
        'Phân tích bài đăng có hiệu quả tốt nhất để tiếp tục phát triển'
      ],
      goal: '🎯 Hiểu rõ hiệu suất nội dung và tối ưu kết quả nhận thưởng'
    },
    {
      number: 6,
      icon: Trophy,
      emoji: '🏆',
      title: 'Công bố & Nhận thưởng',
      shortTitle: 'Nhận thưởng',
      description: 'Nhận thưởng minh bạch',
      time: 'Định kỳ',
      color: '#DC2626',
      details: [
        'Hệ thống tổng hợp số vote trả phí của từng Creator',
        'Tự động tính chia thưởng (tối đa 20%) vào ví Creator',
        'Công bố kết quả định kỳ và vinh danh Creator nổi bật'
      ],
      goal: '🎯 Đảm bảo minh bạch, tăng động lực và ghi nhận nỗ lực sáng tạo'
    }
  ];

  return (
    <section className={styles.steps}>
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
            <Target size={16} />
            <span>Quy trình đơn giản</span>
          </motion.div>

          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Chỉ cần <span className={styles.highlight}>6 bước đơn giản</span>
          </motion.h2>

          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Để nhận <span className={styles.highlight}>Gói 39 Triệu</span> và bắt đầu kiếm thu nhập từ nội dung sáng tạo
          </motion.p>
        </motion.div>

        {/* Steps Grid - Mobile First */}
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className={`${styles.stepCard} ${activeStep === index ? styles.active : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStep(activeStep === index ? -1 : index)}
              >
                {/* Step Header */}
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>
                    <span className={styles.stepNumberText}>{step.number}</span>
                  </div>
                  
                  <div 
                    className={styles.stepIcon}
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <Icon size={20} style={{ color: step.color }} />
                    <span className={styles.stepEmoji}>{step.emoji}</span>
                  </div>
                  
                  <div className={styles.stepInfo}>
                    <h3 className={styles.stepTitle}>{step.shortTitle}</h3>
                    <div className={styles.stepMeta}>
                      <span className={styles.stepTime}>
                        <Clock size={12} />
                        {step.time}
                      </span>
                    </div>
                  </div>

                  <ChevronDown 
                    className={`${styles.expandIcon} ${activeStep === index ? styles.expanded : ''}`}
                    size={20}
                  />
                </div>

                {/* Step Description */}
                <p className={styles.stepDescription}>{step.description}</p>

                {/* Step Details - Expandable */}
                <AnimatePresence>
                  {activeStep === index && (
                    <motion.div
                      className={styles.stepDetails}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.detailsList}>
                        {step.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            className={styles.detailItem}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                          >
                            <CheckCircle size={16} className={styles.checkIcon} />
                            <span>{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className={styles.goalBox}>
                        <Target size={16} className={styles.goalIcon} />
                        <span>{step.goal}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress Line */}
                {index < steps.length - 1 && (
                  <div className={styles.progressLine}>
                    <div 
                      className={styles.progressFill}
                      style={{ 
                        backgroundColor: step.color,
                        width: index < activeStep ? '100%' : '0%'
                      }}
                    />
                  </div>
                )}
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
            <div className={styles.ctaIconCircle}>
              <Gift size={36} />
            </div>
            <h3 className={styles.ctaTitle}>
              Đơn giản vậy thôi! Bắt đầu ngay từ <span className={styles.ctaHighlight}>Bước 1</span>
            </h3>
            <p className={styles.ctaText}>
              Hoàn thành 6 bước và nhận toàn bộ <strong>Gói Quyền Lợi 39 Triệu</strong> ngay hôm nay!
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

export default Steps;
