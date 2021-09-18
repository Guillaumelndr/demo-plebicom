import React, { useEffect, useRef } from 'react'
import { content } from './style'

import bike from 'assets/images/showroom/bike.png'

import gsap from 'gsap'

import { useTranslation } from 'react-i18next'
import Space from 'components/ui/space'

import getOffset from 'utils/getOffset'

const Showroom = () => {
  const imageRef = useRef(null)
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  const { t } = useTranslation()

  const setImagePosition = () => sectionRef.current.style.paddingBottom = imageRef.current.offsetHeight / 1.3 + 'px'

  const effectOptions = {
    effectDistance: 300, // Distance between the beginning and the end of the text fade effect
    effectStart: 200,
    targetOffsetTop: 0
  }

  useEffect(() => {
    window.addEventListener('resize', setImagePosition)
    return () => window.removeEventListener('resize', setImagePosition)
  }, [imageRef])

  useEffect(() => {
    effectOptions.targetOffsetTop = getOffset(textRef.current).top

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY
      const start = effectOptions.targetOffsetTop - effectOptions.effectStart
      // 1 = 100% of the effect [0 - 1]
      const progress = 1 - (scrollY - start) / effectOptions.effectDistance

      if (scrollY > start && (scrollY - start) <= effectOptions.effectDistance) {
        gsap.set(textRef.current, { opacity: progress, y: ((1 - progress) * effectOptions.effectDistance) })
        gsap.set(imageRef.current, { width: 60 + 20 * progress + '%' })
      } else if ((scrollY - start) > effectOptions.effectDistance) {
        gsap.set(textRef.current, { opacity: 0, y: effectOptions.effectDistance })
        gsap.set(imageRef.current, { width: '60%' })
      } else if (scrollY <= start) {
        gsap.set(textRef.current, { opacity: 1, y: 0 })
        gsap.set(imageRef.current, { width: '80%' })
      }
    })
  }, [])

  return (
    <div className={content} ref={sectionRef}>
      <Space direction='vertical' ref={textRef}>
        <h1>AEROAD CFR</h1>
        <p>{t('showroom.content')}</p>
      </Space>
      <img src={bike} ref={imageRef} alt='canyon-aero-cf' onLoad={() => setImagePosition()} />
    </div>
  )
}

export default Showroom
