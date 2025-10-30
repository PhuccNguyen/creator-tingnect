'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gift, 
  ArrowRight, 
  DollarSign,
  Clock,
  Users,
  Star,
  Rocket,
  Zap,
  Target,
  Infinity,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Award,
  Heart
} from 'lucide-react';
import styles from './Registration.module.css';

const Registration: React.FC = () => {
  const handleRegisterClick = () => {
    window.open('https://forms.gle/H3k58Cj1k7YWpSum9', '_blank');
  };

  const benefits = [
    {
      icon: Gift,
      emoji: '🎁',
      title: 'Thưởng khởi đầu',
      amount: '50K',
      description: 'Ngay khi đăng ký',
      color: '#E7C873'
    },
    {
      icon: DollarSign,
      emoji: '💰',
      title: 'Chia thưởng',
      amount: '20%',
      description: 'Doanh thu từ vote',
      color: '#10B981'
    },
    {
      icon: TrendingUp,
      emoji: '📈',
      title: 'Phát triển',
      amount: '∞',
      description: 'Không giới hạn',
      color: '#2AF4FF'
    }
  ];

  const urgencyPoints = [
    { icon: Gift, emoji: '🎁', text: 'Nhận ngay 50.000đ khi đăng ký thành công' },
    { icon: Users, emoji: '👥', text: 'Chỉ giới hạn 100 Creator đầu tiên' },
    { icon: Clock, emoji: '⏰', text: 'Ưu tiên Creator đăng ký sớm' },
    { icon: Rocket, emoji: '🚀', text: 'Bắt đầu kiếm thu nhập từ ngày đầu' }
  ];

  const steps = [
    { number: 1, text: 'Điền form (2 phút)', icon: Target },
    { number: 2, text: 'Follow kênh TingVote', icon: Heart },  
    { number: 3, text: 'Tham gia cộng đồng', icon: Users },
    { number: 4, text: 'Nhận thưởng 50K', icon: Gift }
  ];

  return (
    <section className={styles.registration}>
      <div className={styles.container}>
        {/* Hero Section */}
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
            <Star size={16} />
            <span>Ưu đãi đặc biệt</span>
          </motion.div>

          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Sẵn sàng trở thành{' '}
            <span className={styles.highlight}>Creator?</span>
          </motion.h2>

          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Đăng ký ngay để nhận thưởng 50K và bắt đầu kiếm thu nhập từ nội dung sáng tạo!
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
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div 
                  className={styles.benefitIcon}
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <Icon size={24} style={{ color: benefit.color }} />
                  <span className={styles.benefitEmoji}>{benefit.emoji}</span>
                </div>
                
                <div className={styles.benefitContent}>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <div className={styles.benefitAmount}>{benefit.amount}</div>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Urgency Section */}
        <motion.div 
          className={styles.urgencySection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.urgencyCard}>
            <div className={styles.urgencyHeader}>
              <Zap className={styles.urgencyIcon} size={24} />
              <h3 className={styles.urgencyTitle}>Chỉ dành cho 100 Creator đầu tiên!</h3>
            </div>
            
            <div className={styles.urgencyPoints}>
              {urgencyPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={index}
                    className={styles.urgencyPoint}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className={styles.pointIcon}>
                      <Icon size={16} />
                      <span className={styles.pointEmoji}>{point.emoji}</span>
                    </div>
                    <span className={styles.pointText}>{point.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Steps Section */}
        <motion.div 
          className={styles.stepsSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.stepsTitle}>4 bước đơn giản để bắt đầu:</h3>
          
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className={styles.stepCard}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.stepNumber}>{step.number}</div>
                  <Icon size={20} className={styles.stepIcon} />
                  <span className={styles.stepText}>{step.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaCard}>
            <Rocket className={styles.ctaIcon} size={32} />
            
            <h3 className={styles.ctaTitle}>
              Đừng để cơ hội trôi qua!
            </h3>
            
            <p className={styles.ctaText}>
              Mỗi ngày chậm trễ là mỗi ngày bạn mất cơ hội kiếm thu nhập từ đam mê sáng tạo
            </p>

            <motion.button
              className={styles.ctaButton}
              onClick={handleRegisterClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Gift size={20} />
              <span>Đăng ký nhận 50K ngay!</span>
              <ArrowRight size={18} />
            </motion.button>

            <div className={styles.guarantee}>
              <CheckCircle size={16} />
              <span>100% miễn phí • Nhận thưởng trong 24h • Hỗ trợ 24/7</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div 
          className={styles.testimonialSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          viewport={{ once: true }}
        >
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <Award className={styles.testimonialIcon} size={24} />
              
              <blockquote className={styles.quote}>
                "Tôi đã kiếm được 2 triệu đồng chỉ trong tháng đầu tiên. 
                TingVote thực sự giúp tôi biến đam mê thành thu nhập!"
              </blockquote>
              
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <strong>Nguyễn Thị Quỳnh Anh</strong>
                  <span>Creator từ tháng 08/2025</span>
                </div>
                <div className={styles.earnings}>+6M VNĐ/tháng</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;