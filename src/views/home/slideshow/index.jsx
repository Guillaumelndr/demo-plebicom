import React, { useEffect, useRef } from 'react'
import { useGsapToggle } from 'utils/gsap'
import gsap from 'gsap'
import useOnScreen from 'utils/useOnScreen'
import image from 'assets/images/showroom/frame.png'




const SlideShow = () => {
  const sectionRef = useRef(null)
  const isOpen = useOnScreen(sectionRef)
  const timeline = useGsapToggle(isOpen)

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
      .to('[data-fade-out]', { opacity: 0, duration: 0.2}, 0)
      .to('body', { backgroundColor: 'black', duration: 0.4,  delay: 0.2}, 0)
  }, [])

  return (
    <div ref={sectionRef}>
        <div className="wrapper">
            <img src={image} alt={'canyon-image-frame'} />
        </div>
    </div>
  )
}

export default SlideShow
