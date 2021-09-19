import React from 'react'
import PropTypes from 'prop-types'

import { primaryStyle, secondaryStyle } from './style'

const Button = ({ children, type, onClick, props }) => {
  return (
    <button
      className={{ primary: primaryStyle, secondary: secondaryStyle }[type]}
      {...props}
      onClick={e => onClick(e)}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'primary'
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func
}

export default Button
