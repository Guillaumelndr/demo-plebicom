import React, { useEffect, useRef } from 'react'
import { content, separator } from './style'

import bike from 'assets/images/showroom/bike.png'

import gsap from 'gsap'
import { useTranslation } from 'react-i18next'

import Space from 'components/ui/space'
import getOffset from 'utils/getOffset'
import animationProgress from 'utils/animationProgress'

const Showroom = () => {
  const imageRef = useRef(null)
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  const { t } = useTranslation()

  const setImagePosition = () => sectionRef.current.style.paddingBottom = imageRef.current.offsetHeight / 1.3 + 'px'

  const effectOptions = {
    effectDistance: 300, // Distance between the beginning and the end of the fade effect
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

      // animationProgress returns a number in the interval [0-1] which interprets the level of progression of the animation
      const progress = animationProgress(scrollY, start, effectOptions.effectDistance)

      if (scrollY > start && (scrollY - start) <= effectOptions.effectDistance) {
        // set the animation on init position
        gsap.set(textRef.current, { opacity: progress, y: ((1 - progress) * effectOptions.effectDistance) })
        gsap.set(imageRef.current, { width: 60 + 20 * progress + '%' })
      } else if ((scrollY - start) > effectOptions.effectDistance) {
        // set the animation on end position
        gsap.set(textRef.current, { opacity: 0, y: effectOptions.effectDistance })
        gsap.set(imageRef.current, { width: '60%' })
      } else if (scrollY <= start) {
        // set the animation on init position
        gsap.set(textRef.current, { opacity: 1, y: 0 })
        gsap.set(imageRef.current, { width: '80%' })
      }
    })
  }, [])

  return (
    <div className={content} ref={sectionRef}>
      <Space direction='vertical' ref={textRef} separatorClassName={separator}>
        <h1>AEROAD CFR</h1>
        <p>{t('showroom.content')}</p>
      </Space>
      <img src={bike} ref={imageRef} alt='canyon-aero-cf' onLoad={() => setImagePosition()} />
    </div>
  )
}

export default Showroom
