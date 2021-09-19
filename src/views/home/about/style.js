import { css } from '@emotion/css'

export const row = css`
  display: flex;
  align-items: flex-start;
  min-height: 70vh;
  justify-content: space-evenly;
  position: relative;
  padding-top: 200px;
  @media (max-width: 1000px) {
    padding-top: 100px;
    flex-direction: column;
    align-items: center;
    min-height: 40vh;
  }
`

export const col = css`
  flex: 0 0 50%;
  max-width: 400px;
  opacity: 0;
  transform: translate(0, 20px);
  position: sticky;
  top: calc(50vh - 250px);
  @media (max-width: 1000px) {
    flex: 0 0 100%;
    padding: 0 16px;
  }
`

export const number = css`
  font-weight: bold;
  font-size: 10em;
  background: -webkit-linear-gradient(var(--primary), #ff3838);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
