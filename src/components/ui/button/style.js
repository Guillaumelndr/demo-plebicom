import { css } from '@emotion/css'

export const primaryStyle = css`
  background-color: var(--white);
  border: none;
`

export const secondaryStyle = css`
  background-color: transparent;
  border: 1px solid var(--white);
  color: white;
  transition: all 200ms ease-out;
  &:hover {
    color: var(--primary);
    border-color: var(--primary);
  }
`
