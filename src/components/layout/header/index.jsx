import React, { useEffect, useRef } from 'react'
import { nav, flex, icons, icon, flexCenter, menu, header } from './style'

import logo from 'assets/images/logo.svg'
import Container from 'components/ui/container'
import Space from 'components/ui/space'

import searchIcon from 'assets/icons/search.svg'
import hearthIcon from 'assets/icons/hearth.svg'
import userIcon from 'assets/icons/user.svg'

import { useTranslation } from 'react-i18next'
import { Link, useHistory } from 'react-router-dom'

const Header = () => {
  const { t } = useTranslation()
  const history = useHistory()

  const menuItem = [
    t('navigation.road'),
    t('navigation.gravel'),
    t('navigation.vtt'),
    t('navigation.vae'),
    t('navigation.hybrid'),
    t('navigation.equipment'),
    t('navigation.outlet'),
    t('navigation.service')
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
      headerRef.current.style.transform = 'translate3d(0, 0, 0)'
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
          <Link to='/'>
            <img src={logo} alt='canyon-logo' height={20} />
          </Link>
          <Space size={14} className={icons} separatorClassName={icon}>
            <img src={searchIcon} height={20} alt='nav-icon-search' />
            <img src={hearthIcon} height={20} alt='nav-icon-hearth' />
            <img src={userIcon} height={20} alt='nav-icon-user' />
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
