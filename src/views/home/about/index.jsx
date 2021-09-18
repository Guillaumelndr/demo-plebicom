import React, { useEffect, useRef } from 'react'
import Container from 'components/ui/container'

import { row, col, number } from './style'
import { useTranslation } from 'react-i18next'
import Space from 'components/ui/space'
import useOnScreen from 'utils/useOnScreen'
import { useGsapToggle } from 'utils/gsap'

import gsap from 'gsap'

const About = () => {
  const { t } = useTranslation()
  const targetRef = useRef(null)

  const isOpen = useOnScreen(targetRef)
  const timeline = useGsapToggle(isOpen)

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
      .to('.' + col, { opacity: 1, y: 0, duration: 1.2, delay: 0.4, stagger: 0.3 }, 0)
  }, [])

  console.log(isOpen)
  return (
    <Container className={row}>
      <div className={col} ref={targetRef} data-fade-out={1}>
        <Space size={0} direction='vertical'>
          <div className={number}>3x</div>
          <h3>{t('about.speed.title')}</h3>
          <p>{t('about.speed.content')}</p>
        </Space>
      </div>
      <div className={col} data-fade-out={1}>
        <Space size={0} direction='vertical'>
          <div className={number}>0.7k</div>
          <h3>{t('about.power.title')}</h3>
          <p>{t('about.power.content')}</p>
        </Space>
      </div>
    </Container>
  )
}

export default About
