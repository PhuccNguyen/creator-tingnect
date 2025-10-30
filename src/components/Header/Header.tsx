'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Star,
  Gift,
  Users,
  HelpCircle,
  UserPlus,
  ArrowRight,
  Target,
  Lightbulb
} from 'lucide-react'
import styles from './Header.module.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Kiểm tra device type
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Xử lý scroll với throttling
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }
    
    // Xử lý resize
    const handleResize = () => {
      checkMobile()
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        document.body.style.overflow = 'auto'
      }
    }

    // Initial check
    checkMobile()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobileMenuOpen])

  const navigationItems = [
    { 
      id: 'introduction', 
      label: 'Giới thiệu', 
      icon: Lightbulb, 
      description: 'Tìm hiểu về Creator Lab',
      color: '#3B82F6' 
    },
    { 
      id: 'benefits', 
      label: 'Lợi ích', 
      icon: Gift, 
      description: 'Những gì bạn sẽ nhận được',
      color: '#10B981' 
    },
    { 
      id: 'steps', 
      label: 'Quy trình', 
      icon: Target, 
      description: '6 bước đơn giản để bắt đầu',
      color: '#F59E0B' 
    },
    { 
      id: 'faq', 
      label: 'FAQ', 
      icon: HelpCircle, 
      description: 'Giải đáp thắc mắc',
      color: '#8B5CF6' 
    }
  ]

  const handleNavClick = (sectionId: string) => {
    console.log('Navigating to section:', sectionId)
    
    // Đóng mobile menu trước
    closeMobileMenu()
    
    // Delay để đảm bảo menu đã đóng hoàn toàn trước khi scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      console.log('Found element:', element)
      
      if (element) {
        // Tính toán offset chính xác
        const headerHeight = window.innerWidth <= 768 ? 70 : 80
        const elementPosition = element.offsetTop - headerHeight - 10 // Thêm 10px buffer
        
        console.log('Scrolling to position:', elementPosition)
        
        window.scrollTo({
          top: Math.max(0, elementPosition),
          behavior: 'smooth'
        })
      } else {
        console.warn(`Element với ID "${sectionId}" không tìm thấy`)
      }
    }, 300) // Delay 300ms để menu animation hoàn thành
  }

  const handleRegisterClick = () => {
    // Mở Google Form đăng ký Creator Lab
    window.open('https://forms.gle/H3k58Cj1k7YWpSum9', '_blank')
    closeMobileMenu()
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'auto'
    document.body.style.position = 'relative'
  }

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)
    
    if (newState) {
      // Mở menu mobile
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      // Đóng menu mobile
      document.body.style.overflow = 'auto'
      document.body.style.position = 'relative'
    }
  }

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Logo Section */}
          <motion.div
            className={styles.logoSection}
            animate={{
              scale: isScrolled ? 0.95 : 1
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className={styles.logoContainer}>
              <div className={styles.tingnectLogo}>
                <Image
                  src="/Image/logo/tingnect-logo.png"
                  alt="TingNect"
                  width={171}
                  height={47}
                  priority
                  className={styles.logoImage}
                />
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={styles.navLink}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  title={item.description}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </motion.button>
              )
            })}
          </nav>

          {/* Right Actions */}
          <div className={styles.rightActions}>
            {/* CTA Button */}
            <motion.button 
              onClick={handleRegisterClick}
              className={styles.ctaButton}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 12px 30px rgba(231, 200, 115, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              title="Đăng ký nhận thưởng 50K ngay"
            >
              <UserPlus size={18} />
              <span className={styles.ctaText}>
                <span className={styles.ctaTextDesktop}>Đăng ký nhận thưởng</span>
                <span className={styles.ctaTextMobile}>Đăng ký</span>
              </span>
              <div className={styles.ctaBadge}>50K</div>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
              aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            >
              <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring', 
              damping: 30, 
              stiffness: 400 
            }}
          >
            <div className={styles.mobileMenuContent}>
              <div className={styles.mobileHeader}>
                <h3 className={styles.mobileTitle}>Creator Labs</h3>
                <p className={styles.mobileSubtitle}>Trở thành Creator và kiếm thu nhập</p>
              </div>

              <nav className={styles.mobileNav}>
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={styles.mobileNavLink}
                    whileHover={{ x: 6, scale: 1.02 }}
                    whileTap={{ scale: 0.96, x: 2 }}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.08,
                      type: 'spring',
                      damping: 25,
                      stiffness: 200
                    }}
                  >
                    <div 
                      className={styles.mobileNavIcon}
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <item.icon size={22} />
                    </div>
                    <div className={styles.mobileNavContent}>
                      <span className={styles.mobileNavLabel}>{item.label}</span>
                      <span className={styles.mobileNavDescription}>{item.description}</span>
                    </div>
                    <div className={styles.mobileNavArrowContainer}>
                      <ArrowRight className={styles.mobileNavArrow} size={18} />
                    </div>
                  </motion.button>
                ))}
                
                <motion.button 
                  onClick={handleRegisterClick}
                  className={styles.mobileCtaButton}
                  style={{ animationDelay: `${navigationItems.length * 0.1}s` }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className={styles.mobileCtaContent}>
                    <UserPlus className={styles.mobileCtaIcon} size={24} />
                    <div className={styles.mobileCtaText}>
                      <span className={styles.mobileCtaLabel}>Đăng ký Creator Lab</span>
                      <span className={styles.mobileCtaSubtext}>Nhận thưởng 50.000đ ngay</span>
                    </div>
                  </div>
                  <div className={styles.mobileCtaBadge}>
                    <Gift size={16} />
                    <span>50K</span>
                  </div>
                </motion.button>
              </nav>

              <div className={styles.mobileFooter}>
                <p className={styles.mobileFooterText}>
                  ⭐ Đã có 1000+ Creator tin tùng
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.overlay}
          onClick={closeMobileMenu}
        />
      )}
    </>
  )
}

export default Header

