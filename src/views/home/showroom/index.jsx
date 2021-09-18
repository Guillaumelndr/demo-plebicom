import React, { useEffect, useRef } from 'react'
import { content } from './style'

import bike from 'assets/images/showroom/bike.png'



import gsap from 'gsap'

import {useTranslation} from "react-i18next";

const Showroom = () => {
  const imageRef = useRef(null)
  const sectionRef = useRef(null)

  const {t} = useTranslation()

    const setImagePosition = () => {
    sectionRef.current.style.paddingBottom = imageRef.current.offsetHeight + 'px'
    }

  useEffect(() => {
    window.addEventListener('resize', setImagePosition)
    return () => window.removeEventListener('resize', setImagePosition)
  }, [imageRef])

  return (
    <div className={content} ref={sectionRef}>
        <h1>AEROAD CFR</h1>
        <p>{t('showroom.content')}</p>

      <img src={bike} ref={imageRef} alt="canyon-aero-cf" onLoad={() => setImagePosition()} />
    </div>
  )
}

export default Showroom
