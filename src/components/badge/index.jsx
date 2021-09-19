import React from 'react'
import PropTypes from 'prop-types'

import { container, badge } from './style'

const Badge = ({ children, count }) => {
  if (!count) return children
  return (
    <div className={container} data-drawer>
      {children}
      <div className={badge}>
        {count >= 100 ? '99+' : count}
      </div>
    </div>
  )
}

Badge.propTypes = {
  children: PropTypes.node,
  count: PropTypes.number
}

export default Badge
