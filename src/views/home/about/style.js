import { css } from '@emotion/css'

export const row = css`
  display: flex;
  padding-top: 300px;
  justify-content: space-evenly;
`

export const col = css`
  flex: 0 0 50%;
  max-width: 400px;
  opacity: 0;
  transform: translate(0, 20px);
`

export const number = css`
  font-weight: bold;
  font-size: 10em;
  background: -webkit-linear-gradient(var(--primary), #ff3838);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
