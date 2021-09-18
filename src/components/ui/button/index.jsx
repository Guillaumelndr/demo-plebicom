import React from 'react'
import { primaryStyle, secondaryStyle } from './style'

const Button = ({ children, type }) => {
  return (
    <button
      className={{ primary: primaryStyle, secondary: secondaryStyle }[type]}
    >
      {children}
    </button>
  )
}

export default Button
