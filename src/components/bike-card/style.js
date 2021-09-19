import { css } from '@emotion/css'

export const image = css`
    img {
      width: 90%;
      transition: transform 200ms;
      &:hover {
        transform: translate(-50%, -50%) scale(1.05);
      }
    }
`

export const info = css`
  margin: 10px 0 5px 0;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  font-weight: 300;
  color: black;
  .rc-rate {
    font-size: 10px;
  }
  .rc-rate-star  {
    margin-right: 4px;
  }
`

export const textEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const money = css`
  font-weight: 700;
  color: #464545;
`

export const monthPaymentInfo = css`
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.9em;
`
