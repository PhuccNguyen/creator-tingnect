'use client'

import { useEffect } from 'react'
import { useNextStep } from 'nextstepjs'

interface TourManagerProps {
  autoStartDelay?: number
  tourName?: string
}

export default function TourManager({ 
  autoStartDelay = 3000, 
  tourName = 'creator-lab-onboarding' 
}: TourManagerProps) {
  const { startNextStep } = useNextStep()

  useEffect(() => {
    // Kiểm tra xem user đã xem tour chưa
    const hasSeenTour = localStorage.getItem('creator-lab-tour-completed')
    
    // Kiểm tra xem đây có phải lần đầu tiên visit page không
    const isFirstVisit = !localStorage.getItem('creator-lab-visited')
    
    if (!hasSeenTour && isFirstVisit) {
      // Đánh dấu là đã visit
      localStorage.setItem('creator-lab-visited', 'true')
      
      // Đợi page load xong rồi mới bắt đầu tour
      const timer = setTimeout(() => {
        // Kiểm tra lại một lần nữa trước khi start
        const stillNotSeen = !localStorage.getItem('creator-lab-tour-completed')
        if (stillNotSeen) {
          startNextStep(tourName)
        }
      }, autoStartDelay)

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

  // Helper function để tự động switch tab khi tour focus
  useEffect(() => {
    const handleTourTabSwitch = () => {
      // Lắng nghe NextStep events để auto-switch tabs
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const element = mutation.target as HTMLElement
            if (element.classList.contains('nextstep-target')) {
              // Kiểm tra nếu element là tab button
              if (element.id?.startsWith('benefits-tab-')) {
                const tabId = parseInt(element.id.replace('benefits-tab-', ''))
                // Tự động click vào tab để switch nội dung
                setTimeout(() => {
                  element.click()
                }, 300)
              }
            }
          }
        })
      })

      // Observe changes trên body
      observer.observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class']
      })

      return () => observer.disconnect()
    }

    // Chờ DOM load xong
    const timer = setTimeout(handleTourTabSwitch, 1000)
    return () => clearTimeout(timer)
  }, [])

  return null
}