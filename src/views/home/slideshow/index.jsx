import React, { useEffect, useRef } from 'react'
import { useGsapToggle } from 'utils/gsap'
import gsap from 'gsap'
import useOnScreen from 'utils/useOnScreen'
import image from 'assets/images/showroom/frame.png'

import { row, col } from './style'
import { useTranslation } from 'react-i18next'

import Container from 'components/ui/container'
import Space from 'components/ui/space'
import Button from 'components/ui/button'

import getOffset from 'utils/getOffset'
import animationProgress from 'utils/animationProgress'

const SlideShow = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const isOpen = useOnScreen(sectionRef)
  const timeline = useGsapToggle(isOpen)

  const { t } = useTranslation()

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
      .to('[data-fade-out]', { color: 'white', duration: 1 }, 0)
      .to('body', { backgroundColor: 'black', duration: 1 }, 0)
  }, [timeline])

  useEffect(() => {
    const sectionHeight = sectionRef.current.offsetHeight
    const sectionTop = getOffset(sectionRef.current).top

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY
      const winHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight
      // progress interval [0 ; 1]
      const progress = animationProgress(scrollY + winHeight, sectionTop, sectionHeight)

      console.log(progress)
      if (scrollY + winHeight > sectionTop) {
        // start animation
        gsap.set(imageRef.current, { rotate: 10 - (30 * progress) }) // animation interval [-10deg ; +10deg]
      } else if (scrollY + winHeight <= sectionTop) {
        // reset to start point
        gsap.set(imageRef.current, { rotate: -10 })
      }
    })
  }, [])

  return (
    <div ref={sectionRef}>
      <Container>
        <div className={row}>
          <div className={col} data-slide-show={1}>
            <Space direction='vertical' size={25}>
              <h1>{t('slideshow.title')}</h1>
              <p>{t('slideshow.content')}</p>
              <Space>
                <Button>{t('slideshow.button.shop')}</Button>
                <Button type='secondary'>{t('slideshow.button.more')}</Button>
              </Space>
            </Space>
          </div>
          <div className={col} data-slide-show={1}>
            <img src={image} alt='canyon-image-frame' ref={imageRef} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SlideShow
