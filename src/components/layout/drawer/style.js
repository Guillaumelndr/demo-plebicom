import { css } from '@emotion/css'

export const drawer = css`
  position: absolute;
  right: 0;
  top: 0;
  background-color: var(--white);
  height: 100%;
  width: 100vw;
  max-width: 400px;
  box-shadow: 9px 0 20px 19px #00000073;
  transform: translateX(100%);
  padding: 16px;
  overflow-y: auto;
  h3 {
    font-weight: 200;
    font-size: 1.4em;
    margin-bottom: 30px;
  }
  button {
    margin-bottom: 26px;
  }
`

export const drawerWrapper = css`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  z-index: 10001;
  opacity: 0;
  display: none;
`

export const close = css`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`
