import React from 'react'
import PropTypes from 'prop-types'

import {main} from './style'

import Header from './header'
import FlashAdvert from "./flash-advert";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main className={main}>
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
