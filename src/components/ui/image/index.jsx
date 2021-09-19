import React, { useMemo, useRef, useState } from 'react'
import { css, cx } from '@emotion/css'
import PropTypes from 'prop-types'

import useOnScreen from 'utils/useOnScreen'
import { image, Mask, centeredImage } from './style'

const Image = ({ src, ratio, alt, overlay, className, center, ...props }) => {
  const [loading, setLoading] = useState(true)
  const imageRef = useRef(null)
  const containerRef = useRef(null)

  const isOnScreen = useOnScreen(containerRef, '200px', true)

  const imageMemo = useMemo(() => (
    <img
      src={src}
      className={cx(image, center ? centeredImage : undefined)}
      alt={alt}
      ref={imageRef}
      {...props}
      onLoad={() => setLoading(false)}
    />
  ), [src])

  return (
    <Mask
      className={cx(css`padding-bottom:${ratio};`, className)}
      ref={containerRef}
      load={loading}
    >
      {isOnScreen && imageMemo}
      {overlay}
    </Mask>

  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  overlay: PropTypes.node,
  ratio: PropTypes.oneOfType([PropTypes.string]),
  className: PropTypes.string,
  center: PropTypes.bool
}
export default Image
