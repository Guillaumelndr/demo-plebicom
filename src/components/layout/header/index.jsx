import React from 'react'
import { nav, flex, icons, icon, flexCenter, menu } from './style'

import { RiSearch2Line, RiHeart3Line, RiUser3Line } from 'react-icons/ri'

import logo from 'assets/images/logo.svg'
import Container from 'components/ui/container'
import Space from 'components/ui/space'
import {useTranslation} from "react-i18next";

const Header = () => {
    const {t, i18n} = useTranslation()

    console.log(i18n)
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

  return (
      <>
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
                  <Space size={14} className={menu}>
                      {
                          menuItem.map(item => (
                              <span key={item}>{item}</span>
                          ))
                      }
                  </Space>
              </Container>
          </nav>
      </>

  )
}

export default Header
