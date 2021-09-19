import { css } from '@emotion/css'

export const row = css`
  display: flex;
  justify-content: space-evenly;
  color: white;
  align-items: flex-start;
  min-height: 80vh;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1060px) {
    flex-direction: column;
    align-items: center;
  }
`

export const col = css`
  flex: 0 0 50%;
  max-width: 400px;
  position: sticky;
  top: calc(50vh - 235px);
  @media (max-width: 1060px) {
    flex: 0 0 100%;
  }
  
  img {
    transform: translateX(-30%) rotate(-10deg);
    filter: contrast(1.2) brightness(1.3);
  }
`
