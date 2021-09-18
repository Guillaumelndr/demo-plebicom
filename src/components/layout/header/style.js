import { css } from '@emotion/css'

export const nav = css`
  background-color: var(--grey);
  padding: 16px;
  border-bottom: 1px solid #ddd;
`

export const flex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const icons = css`
  transform: translateY(4px);
`

export const icon = css` 
  cursor: pointer;
  color: var(--black);
  transition: color 200ms;
  &:hover {
    color: var(--primary)
  }
`

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const menu = css`
  font-weight: 100;
  font-size: 0.85em;
  letter-spacing: 0.002em;
  text-transform: uppercase;
  span {
    cursor: pointer;
  }
  div:nth-last-child(1) {
    font-family: fontBold, sans-serif;
    font-weight: bold;
  }
`

export const header = css`
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  background-color: white;
  transition: transform 0.2s;
  position: fixed;
`
