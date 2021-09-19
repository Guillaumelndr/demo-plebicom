import { css } from '@emotion/css'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const loading = keyframes`
  0% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
`

export const Mask = styled.div`
  position: relative;
  overflow: hidden;
  background: #f1f1f1;
  background: linear-gradient(90deg,rgba(190,190,190,.2) 25%,rgba(129,129,129,.24) 37%,rgba(190,190,190,.2) 63%);
  background-size: 400% 100%;
  animation: ${loading} 1.4s ease infinite;
  ${props => (!props.load && 'animation: unset;')}
}
`

export const image = css`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  z-index: 0;
`

export const centeredImage = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
