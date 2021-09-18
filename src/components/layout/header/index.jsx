import React from 'react'
import { nav, flex } from './style'

import logo from 'assets/images/logo.svg'
import Container from 'components/ui/container'

const Header = () => {
  return (
    <nav className={nav}>
      <Container className={flex}>
          <img src={logo} alt='canyon-logo' height={20} />
      </Container>
    </nav>
  )
}

export default Header
