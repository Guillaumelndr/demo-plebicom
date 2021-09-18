import React, { useEffect, useRef } from 'react'
import { content } from './style'

import bike from 'assets/images/showroom/bike.png'

import gsap from 'gsap'

import { useTranslation } from 'react-i18next'
import Button from 'components/ui/button'
import Space from 'components/ui/space'

import getOffset from 'utils/getOffset'

const Showroom = () => {
  const imageRef = useRef(null)
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  const { t } = useTranslation()

  const setImagePosition = () => sectionRef.current.style.paddingBottom = imageRef.current.offsetHeight / 1.2 + 'px'

  const opacityEffect = {
    effectDistance: 200, // Distance between the beginning and the end of the text fade effect
    effectStart: 200,
    targetOffsetTop: 0,
  }

  useEffect(() => {
    window.addEventListener('resize', setImagePosition)
    return () => window.removeEventListener('resize', setImagePosition)
  }, [imageRef])

  useEffect(() => {
    opacityEffect.targetOffsetTop = getOffset(textRef.current).top
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY
      const start = opacityEffect.targetOffsetTop - opacityEffect.effectStart
      if (scrollY > start && (scrollY - start) <= opacityEffect.effectDistance) {
        gsap.set(textRef.current, {opacity: 1 - (scrollY - start)  / opacityEffect.effectDistance})
      }else if ((scrollY - start) > opacityEffect.effectDistance) {
        gsap.set(textRef.current, {opacity: 0})
      } else if (scrollY <= start) {
        gsap.set(textRef.current, {opacity: 1})
      }
    })
  }, [])

  return (
    <div className={content} ref={sectionRef}>
      <Space direction='vertical' ref={textRef}>
        <h1>AEROAD CFR</h1>
        <p>{t('showroom.content')}</p>
        <Button type='secondary'>{t('showroom.button')}</Button>
      </Space>
      <img src={bike} ref={imageRef} alt='canyon-aero-cf' onLoad={() => setImagePosition()} />
    </div>
  )
}

export default Showroom
