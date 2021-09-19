import React from 'react'
import { css, cx } from '@emotion/css'
import { Loading } from './styled'

const Skeleton = ({ height, width, className }) => {
  return (
    <Loading className={cx(css`height: ${height}; width: ${width};`, className)} />
  )
}

Skeleton.defaultProps = {
  height: '20px',
  width: '100px'
}

export default Skeleton
