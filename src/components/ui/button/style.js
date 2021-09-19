import { css } from '@emotion/css'

export const primaryStyle = css`
  background-color: var(--white);
  border: 1px solid var(--black);
  transition: all 200ms ease-out;
  &:hover {
    color: var(--white);
    background-color: var(--primary);
    border: 1px solid var(--primary);
    
  }
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
