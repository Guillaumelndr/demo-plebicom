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
  text-transform: uppercase;
`