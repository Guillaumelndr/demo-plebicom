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

const SlideShow = () => {
  const sectionRef = useRef(null)
  const isOpen = useOnScreen(sectionRef)
  const timeline = useGsapToggle(isOpen)

  const { t } = useTranslation()

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
      .to('[data-fade-out]', { opacity: 0, duration: 0.2 }, 0)
      .to('body', { backgroundColor: 'black', duration: 0.4}, 0)
  }, [])

  return (
    <div ref={sectionRef}>
      <Container>
        <div className={row}>
          <div className={col}>
            <Space direction='vertical' size={25}>
              <h1>{t('slideshow.title')}</h1>
              <p>{t('slideshow.content')}</p>
              <Space>
                <Button>{t('slideshow.button.shop')}</Button>
                <Button type='secondary'>{t('slideshow.button.more')}</Button>
              </Space>
            </Space>
          </div>
          <div className={col}>
            <img src={image} alt='canyon-image-frame' />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SlideShow
