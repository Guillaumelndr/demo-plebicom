import { css } from '@emotion/css'

export const grid = css`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
`

export const filters = css`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  h1 {
    font-size: 2em;
    &::after {
      content: "";
      display: block;
      width: 50%;
      height: 5px;
      background-color: var(--primary);
    }
  }
`
