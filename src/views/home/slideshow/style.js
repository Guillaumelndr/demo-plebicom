import { css } from '@emotion/css'

export const row = css`
  display: flex;
  justify-content: space-evenly;
  color: white;
  border: 1px solid var(--primary);
  position: sticky;
`

export const col = css`
  flex: 0 0 50%;
  max-width: 400px;
  
  img {
    transform: translateX(-30%);
    filter: contrast(1.2) brightness(0.9);
  }
`
