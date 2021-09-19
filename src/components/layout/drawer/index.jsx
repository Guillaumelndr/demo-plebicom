import React, { useEffect, useRef, useState } from 'react'
import { drawer, drawerWrapper, close } from './style'

import { useGsapToggle } from 'utils/gsap'
import gsap from 'gsap'

import closeIcon from 'assets/icons/close.svg'

const Drawer = () => {
  const wrapperRef = useRef(null)
  const drawerRef = useRef(null)

  const [isOpen, setOpen] = useState(false)
  const timeline = useGsapToggle(isOpen)

  const openDrawer = () => setOpen(true)

  useEffect(() => {
    const elements = document.querySelectorAll('[data-drawer]')
    elements.forEach(element => {
      element.addEventListener('click', openDrawer)
    })

    return () => {
      const elements = document.querySelectorAll('[data-drawer]')
      elements.forEach(element => {
        element.removeEventListener('click', openDrawer)
      })
    }
  }, [])

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
      .to(wrapperRef.current, { opacity: 1, display: 'block', duration: 0.2 }, 0)
      .to(drawerRef.current, { x: 0, duration: 0.3 }, 0.2)
  }, [timeline])

  return (
    <div
      className={drawerWrapper}
      ref={wrapperRef}
      onClick={({ target }) => target === wrapperRef.current && setOpen(false)}
    >
      <div className={drawer} ref={drawerRef}>
        <img src={closeIcon} height={15} className={close} alt='close-btn' onClick={() => setOpen(false)} />
      </div>
    </div>
  )
}

export default Drawer
