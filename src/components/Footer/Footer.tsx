'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { 
  Mail,
  Facebook,
  Youtube,
  Instagram,
  Users,
  FileText,
  ArrowUp,
  Heart,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Facebook Page',
      url: 'https://www.facebook.com/TingVote',
      icon: <Facebook size={20} />,
      color: '#1877F2',
      emoji: '📘'
    },
    {
      name: 'Facebook Group',
      url: 'https://www.facebook.com/groups/tingvote',
      icon: <Users size={20} />,
      color: '#42B883',
      emoji: '👥'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@TingVote',
      icon: <Youtube size={20} />,
      color: '#FF0000',
      emoji: '📺'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ting_vote',
      icon: <Instagram size={20} />,
      color: '#E4405F',
      emoji: '📸'
    }
  ];

  const quickLinks = [
    { name: 'Giới thiệu', href: '#introduction', icon: <Sparkles size={16} /> },
    { name: 'Lợi ích', href: '#benefits', icon: <Heart size={16} /> },
    { name: 'Quy trình', href: '#steps', icon: <FileText size={16} /> },
    { name: 'FAQ', href: '#faq', icon: <Users size={16} /> }
  ];

  return (
    <footer className={styles.footer}>
      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className={styles.backToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className={styles.container}>
        <div className={styles.footerContent}>
          
          {/* Main Footer Content */}
          <div className={styles.footerMain}>
            
            {/* Brand Section */}
            <motion.div 
              className={styles.brandSection}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={styles.brandLogo}>
                <Image
                  src="/Image/logo/tingnect-logo.png"
                  alt="TingVote Logo"
                  width={120}
                  height={60}
                  className={styles.logoImage}
                />
                <div className={styles.brandText}>
                  <p className={styles.brandSlogan}>Creator Labs</p>
                </div>
              </div>
              <p className={styles.brandDescription}>
                Nền tảng sáng tạo nội dung hàng đầu Việt Nam. Biến đam mê thành thu nhập bền vững cùng cộng đồng Creator chuyên nghiệp.
              </p>
              
              {/* CTA Registration */}
              <motion.a
                href="https://forms.gle/H3k58Cj1k7YWpSum9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerCta}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={18} />
                <span>Đăng ký Creator ngay</span>
                <ExternalLink size={16} />
              </motion.a>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className={styles.linksSection}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className={styles.sectionTitle}>
                <FileText size={20} />
                <span>Khám phá</span>
              </h4>
              <div className={styles.linksList}>
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={styles.footerLink}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className={styles.contactSection}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className={styles.sectionTitle}>
                <Mail size={20} />
                <span>Liên hệ</span>
              </h4>
              <div className={styles.contactInfo}>
                <a 
                  href="mailto:contact@tingvote.com"
                  className={styles.contactLink}
                >
                  <Mail size={18} />
                  <div className={styles.contactDetails}>
                    <span className={styles.contactLabel}>Email hỗ trợ</span>
                    <span className={styles.contactValue}>contact@tingvote.com</span>
                  </div>
                </a>
                <div className={styles.contactHours}>
                  <span className={styles.hoursLabel}>⏰ Hỗ trợ 24/7</span>
                  <span className={styles.hoursValue}>Phản hồi trong 2 giờ</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Section */}
          <motion.div 
            className={styles.socialSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className={styles.socialTitle}>
              <Users size={20} />
              <span>Kết nối với cộng đồng TingVote</span>
            </h4>
            <div className={styles.socialGrid}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                  style={{ '--accent-color': social.color } as React.CSSProperties}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={styles.socialIcon}>
                    {social.icon}
                    <span className={styles.socialEmoji}>{social.emoji}</span>
                  </div>
                  <span className={styles.socialName}>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div 
            className={styles.footerBottom}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.copyright}>
              <span>© {new Date().getFullYear()} Creator Labs</span>
              <span className={styles.separator}>•</span>
              <span>Tất cả quyền được bảo lưu</span>
            </div>
            <div className={styles.madeWith}>
              <span>Được tạo với</span>
              <motion.span 
                className={styles.heart}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={14} fill="currentColor" />
              </motion.span>
              <span>cho cộng đồng Creator Việt Nam</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;