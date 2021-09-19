import React, { useEffect, useRef } from 'react'

import img1 from 'assets/images/carousel/img1.webp'
import img2 from 'assets/images/carousel/img2.webp'
import img3 from 'assets/images/carousel/img3.webp'

import { useTranslation } from 'react-i18next'
import gsap from 'gsap'

import useOnScreen from 'utils/useOnScreen'
import { useGsapToggle } from 'utils/gsap'
import {section, carousel} from './style'

const Carousel = () => {
  const { t } = useTranslation()

  const sectionRef = useRef(null)
  const isOpen = useOnScreen(sectionRef)
  const timeline = useGsapToggle(isOpen)

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
      .to('[data-slide-show]', { opacity: 0, duration: 0.2 }, 0)
  }, [timeline])
  return (
    <div ref={sectionRef} className={section}>
        <div className={carousel}>
            {
                [img1, img2, img3].map((image, index) => (
                    <img src={image} key={index} />
                ))
            }
        </div>
    </div>
  )
}

export default Carousel
