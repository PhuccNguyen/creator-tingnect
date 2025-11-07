'use client'

import React from 'react'
import { NextStep } from 'nextstepjs'
import type { Tour } from 'nextstepjs'
import { CustomTourCard } from './CustomTourCard'

interface NextStepWrapperProps {
  children: React.ReactNode
  steps: Tour[]
}

export default function NextStepWrapper({ children, steps }: NextStepWrapperProps) {
  const handleComplete = (tourName: string | null) => {
    console.log(`Tour completed: ${tourName}`)
    if (typeof window !== 'undefined') {
      localStorage.setItem('creator-lab-tour-completed', 'true')
    }
  }

  const handleSkip = (step: number, tourName: string | null) => {
    console.log(`Tour skipped at step ${step}: ${tourName}`)
    if (typeof window !== 'undefined') {
      localStorage.setItem('creator-lab-tour-completed', 'true')
    }
  }

  return (
    <NextStep 
      steps={steps}
      shadowRgb="0,0,0"
      shadowOpacity="0.7"
      cardComponent={CustomTourCard}
      onComplete={handleComplete}
      onSkip={handleSkip}
      scrollToTop={false}
      noInViewScroll={false}
    >
      {children}
    </NextStep>
  )
}