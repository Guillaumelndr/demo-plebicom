import { css } from '@emotion/css'

export const row = css`
  display: flex;
  align-items: flex-start;
  min-height: 110vh;
  justify-content: space-evenly;
  position: relative;
  padding-top: 200px;
`

export const col = css`
  flex: 0 0 50%;
  max-width: 400px;
  opacity: 0;
  transform: translate(0, 20px);
  position: sticky;
  top: calc(50vh - 250px);
`

export const number = css`
  font-weight: bold;
  font-size: 10em;
  background: -webkit-linear-gradient(var(--primary), #ff3838);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
