import { css } from '@emotion/css'

export const row = css`
  display: flex;
  @media (max-width: 1330px) {
    flex-direction: column-reverse;
  }
`

export const col = css`
  flex: 0 0 50%;
  padding: 20px;
  h1 {
    font-size: 3em;
    &::after {
      content: "new";
      display: block;
      position: absolute;
      text-transform: lowercase;
      color: var(--primary);
      font-size: 0.3em;
      top: 0;
      right: 0;
      transform: translate(0px, -10px);
    }
  }
  p {
    margin: 0;
    max-width: 400px;
    font-weight: 300;
    line-height: 1.4;
  }
`

export const image = css`
    img {
      width: 90%;
    }
`

export const imageSkeleton = css`
  padding-bottom: 85%;
  width: 100%;
`

export const info = css`
  position: relative;
`

export const infoRow = css`
  display: flex;
  justify-content: space-between;
`

export const content = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
