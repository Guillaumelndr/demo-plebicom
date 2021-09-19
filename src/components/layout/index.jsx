import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { main } from './style'

import Header from './header'
import FlashAdvert from './flash-advert'
import Drawer from './drawer'

const Layout = ({ children }) => {
  const mainRef = useRef(null)

  return (
    <>
      <Header />
      <Drawer />
      <main className={main} ref={mainRef}>
        <FlashAdvert />
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
