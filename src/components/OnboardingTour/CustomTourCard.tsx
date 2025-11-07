'use client'

import React from 'react'
import type { CardComponentProps } from 'nextstepjs'
import styles from './CustomTourCard.module.css'

export const CustomTourCard: React.FC<CardComponentProps> = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}) => {
  return (
    <div className={styles.card} data-step={currentStep}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <span className={styles.icon}>{step.icon}</span>
          <h3 className={styles.title}>{step.title}</h3>
        </div>
        <div className={styles.progress}>
          {currentStep} / {totalSteps}
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.description}>{step.content}</p>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.leftButtons}>
          {currentStep > 1 && (
            <button 
              onClick={prevStep}
              className={styles.buttonSecondary}
            >
              ← Quay lại
            </button>
          )}
        </div>
        
        <div className={styles.rightButtons}>
          <button 
            onClick={skipTour}
            className={styles.buttonSkip}
          >
            Bỏ qua
          </button>
          
          <button 
            onClick={nextStep}
            className={styles.buttonPrimary}
          >
            {currentStep === totalSteps ? '🎉 Hoàn thành tour!' : 'Tiếp theo'} →
          </button>
        </div>
      </div>

      {/* Arrow */}
      {arrow && <div className={styles.arrow}>{arrow}</div>}
    </div>
  )
}