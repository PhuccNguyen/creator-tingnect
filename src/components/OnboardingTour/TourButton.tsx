'use client'

import React from 'react'
import { useNextStep } from 'nextstepjs'
import styles from './TourButton.module.css'

export default function TourButton() {
  const { startNextStep } = useNextStep()

  const handleStartTour = () => {
    startNextStep('creator-lab-onboarding')
  }

  return (
    <button 
      className={styles.tourButton}
      onClick={handleStartTour}
      title="Hướng dẫn sử dụng website"
    >
      <span className={styles.icon}>🎯</span>
      <span className={styles.text}>Hướng dẫn</span>
    </button>
  )
}