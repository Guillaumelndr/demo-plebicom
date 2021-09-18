/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { Fragment } from 'react'
import { css, cx } from '@emotion/css'
import PropTypes from 'prop-types'

const Space = React.forwardRef((
  {
    size,
    children,
    direction,
    className,
    split,
    align,
    style,
    loop,
    separatorClassName,
    id,
    ...props
  }, ref) => {
  const len = children?.length
  const margin = direction === 'vertical' ? 'margin-bottom' : 'margin-right'
  const display = direction === 'vertical' ? 'block' : 'inline-flex'

  const objectStyle = style ? { css: style } : null

  if (!len || typeof children === 'string') return (children && <div {...objectStyle} {...props}>{children}</div>) || <></>

  return (
    <div
      className={cx(css`display: ${display}; align-items: ${align};`, className)}
      {...objectStyle}
      {...props}
      id={id}
      ref={ref}
    >
      {
                split
                  ? (
                      children.map((element, index) => (
                        <Fragment key={index}>
                          {element}
                          {
                                    (index !== len - 1 || loop) && (
                                      <div className={
                                            cx(
                                              css`margin: ${
                                                    direction === 'vertical'
                                                        ? `${size / 2}px 0 ${size / 2}px 0`
                                                        : `0 ${size / 2}px 0 ${size / 2}px`
                                                };`,
                                              separatorClassName
                                            )
                                        }
                                      >
                                        {split}
                                      </div>
                                    )
                                }
                        </Fragment>
                      ))
                    )
                  : (
                      children.map((element, index) => (
                        <div className={cx(index !== len - 1 || loop ? css`${margin}: ${size}px;` : undefined, separatorClassName)} key={index}>
                          {element}
                        </div>
                      ))
                    )
            }
    </div>
  )
})

Space.defaultProps = {
  align: 'center',
  size: 10,
  direction: 'horizontal'
}

Space.propTypes = {
  id: PropTypes.string,
  separatorClassName: PropTypes.string,
  loop: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.node,
  direction: PropTypes.oneOf(['horizontal', 'vertical', null]),
  split: PropTypes.node,
  style: PropTypes.object,
  align: PropTypes.oneOf(['center', 'stretch', 'flex-end', 'flex-start', 'baseline', null])
}

export default Space
