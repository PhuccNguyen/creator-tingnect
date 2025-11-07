'use client'

import React from 'react'
import { useNextStep } from 'nextstepjs'

export default function OnboardingTour() {
  const { startNextStep } = useNextStep()
  
  // Auto start tour cho lần đầu tiên
  React.useEffect(() => {
    const hasSeenTour = localStorage.getItem('creator-lab-tour-completed')
    if (!hasSeenTour) {
      const timer = setTimeout(() => {
        startNextStep('creator-lab-onboarding')
      }, 3000) // 3 giây sau khi trang load
      return () => clearTimeout(timer)
    }
  }, [startNextStep])

  return null // Component này chỉ để handle logic auto-start
}