import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { main } from './style'

import Header from './header'
import FlashAdvert from './flash-advert'

const Layout = ({ children }) => {
  const mainRef = useRef(null)
  return (
    <>
      <Header />
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
