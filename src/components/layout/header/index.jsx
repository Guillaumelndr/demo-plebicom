import React, {useEffect, useRef} from 'react'
import { nav, flex, icons, icon, flexCenter, menu, header } from './style'

import { RiSearch2Line, RiHeart3Line, RiUser3Line } from 'react-icons/ri'

import logo from 'assets/images/logo.svg'
import Container from 'components/ui/container'
import Space from 'components/ui/space'

import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";

const Header = () => {
    const {t} = useTranslation()
    const history = useHistory()

    const menuItem = [
        t('navigation.road'),
        t('navigation.gravel'),
        t('navigation.vtt'),
        t('navigation.vae'),
        t('navigation.hybrid'),
        t('navigation.equipment'),
        t('navigation.outlet'),
        t('navigation.service'),
    ]

    const headerRef = useRef(null)
    const flashAdvertRef = useRef(null)

    let c = 0
    const power = 20
    let currentScrollTop = 0

    const headerScrollEffect = () => {
        const a = window.scrollY
        const b = headerRef.current.offsetHeight

        currentScrollTop = a

        const delta = c - currentScrollTop
        const isCloseToTop = currentScrollTop <= b + 100

        if (c < currentScrollTop && a > b) {
            headerRef.current.style.transform = `translate3d(0, -${b}px, 0)`
        } else if (c > currentScrollTop && !(a <= b)) {
            headerRef.current.style.transform = `translate3d(0, 0, 0)`
        } else if (delta > power || isCloseToTop) {
            headerRef.current.style.transform = 'translate3d(0, 0, 0)'
        }
        c = currentScrollTop
    }

    useEffect(() => {
        document.addEventListener('scroll', headerScrollEffect)
        return () => document.removeEventListener('scroll', headerScrollEffect)
    }, [])

        history.listen(() => {
            if (headerRef.current) {
                headerRef.current.style.transform = 'translate3d(0, 0, 0)'
            }
        })

  return (
          <div ref={headerRef} className={header}>
              <nav className={nav}>
                  <Container className={flex}>
                      <img src={logo} alt='canyon-logo' height={20} />
                      <Space size={14} className={icons} separatorClassName={icon}>
                          <RiSearch2Line size={20} />
                          <RiHeart3Line size={20} />
                          <RiUser3Line size={20} />
                      </Space>
                  </Container>
              </nav>
              <nav className={nav}>
                  <Container className={flexCenter}>
                      <Space size={36} className={menu}>
                          {
                              menuItem.map(item => (
                                  <span key={item}>{item}</span>
                              ))
                          }
                      </Space>
                  </Container>
              </nav>
          </div>
  )
}

export default Header
