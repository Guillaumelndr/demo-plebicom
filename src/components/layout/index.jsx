import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
