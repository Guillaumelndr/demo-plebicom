import React from 'react'
import PropTypes from 'prop-types'

import { primaryStyle, secondaryStyle } from './style'

const Button = ({ children, type }) => {
  return (
    <button className={{ primary: primaryStyle, secondary: secondaryStyle }[type]}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'primary'
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['primary', 'secondary'])
}

export default Button
