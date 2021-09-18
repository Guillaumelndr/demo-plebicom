import React from 'react'
import { cx } from '@emotion/css'
import PropTypes from 'prop-types'

import { container, fluidContainer } from './style'

const Container = ({ children, className, fluid, ...props }) => {
  return (
    <div className={cx(container, className, fluid ? fluidContainer : undefined)} {...props}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool
}
export default Container
