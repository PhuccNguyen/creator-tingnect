'use client'

import { useEffect } from 'react'
import { useNextStep } from 'nextstepjs'

interface TourManagerProps {
  autoStartDelay?: number
  tourName?: string
}

export default function TourManager({ 
  autoStartDelay = 2000, 
  tourName = 'creator-lab-onboarding' 
}: TourManagerProps) {
  const { startNextStep } = useNextStep()

  useEffect(() => {
    // Kiểm tra xem user đã xem tour chưa
    const hasSeenTour = localStorage.getItem('creator-lab-tour-completed')
    
    // Force tour mỗi lần vào trang để test
    const isFirstTime = !hasSeenTour
    
    if (isFirstTime) {
      // Đợi DOM render hoàn toàn
      const checkAndStart = () => {
        // Kiểm tra các element cần thiết đã có chưa
        const heroCtaBtn = document.querySelector('[data-tour="hero-cta"]')
        const benefitsSection = document.querySelector('[data-tour="benefits-section"]')
        const tabButtons = document.querySelector('[data-tour="benefits-tabs"]')
        
        if (heroCtaBtn && benefitsSection && tabButtons) {
          console.log('🎯 Starting Creator Lab tour...', { 
            heroCtaBtn: !!heroCtaBtn,
            benefitsSection: !!benefitsSection, 
            tabButtons: !!tabButtons
          })
          startNextStep(tourName)
        } else {
          console.log('⏳ Waiting for tour elements...', { 
            heroCtaBtn: !!heroCtaBtn,
            benefitsSection: !!benefitsSection, 
            tabButtons: !!tabButtons
          })
          // Nếu chưa có thì đợi thêm
          setTimeout(checkAndStart, 500)
        }
      }
      
      // Bắt đầu sau delay
      const timer = setTimeout(checkAndStart, autoStartDelay)
      return () => clearTimeout(timer)
    }
  }, [startNextStep, autoStartDelay, tourName])

  // Thêm keyboard shortcut để start tour (Ctrl/Cmd + ?)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === '/') {
        event.preventDefault()
        startNextStep(tourName)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [startNextStep, tourName])

  // Helper function để tự động switch tab và focus elements
  useEffect(() => {
    let observer: MutationObserver | null = null

    const setupTourEnhancements = () => {
      // Enhanced tour behaviors
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes') {
            const element = mutation.target as HTMLElement
            
            // Xử lý khi element được highlight
            if (element.classList.contains('nextstep-target')) {
              console.log('🎯 Tour targeting:', element.id || element.className)
              
              // Auto-click tab buttons
              if (element.id?.startsWith('benefits-tab-')) {
                const tabId = parseInt(element.id.replace('benefits-tab-', ''))
                console.log(`🔄 Auto-switching to tab ${tabId}`)
                
                setTimeout(() => {
                  element.click()
                  // Đảm bảo scroll vào view
                  element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                  })
                }, 200)
              }
              
              // Enhanced focus cho hero CTA button
              if (element.id === 'hero-cta-button') {
                setTimeout(() => {
                  element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                  })
                  // Thêm tour focus class
                  element.classList.add('tour-focused')
                  setTimeout(() => {
                    element.classList.remove('tour-focused')
                  }, 3000)
                }, 200)
              }

              // Enhanced focus cho register button
              if (element.id === 'benefits-register-btn') {
                setTimeout(() => {
                  element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                  })
                  // Thêm tour focus class
                  element.classList.add('tour-focused')
                  setTimeout(() => {
                    element.classList.remove('tour-focused')
                  }, 3000)
                }, 200)
              }

              // Auto-scroll to section
              if (element.getAttribute('data-tour')) {
                setTimeout(() => {
                  element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  })
                }, 300)
              }
            }
          }
        })
      })

      // Observe với enhanced options
      observer.observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class', 'data-tour'],
        childList: true
      })
    }

    // Setup after DOM ready
    const timer = setTimeout(setupTourEnhancements, 1000)
    
    return () => {
      clearTimeout(timer)
      observer?.disconnect()
    }
  }, [])

  return null
}