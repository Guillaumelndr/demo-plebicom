import { css } from '@emotion/css'

export const content = css`
  color: white;
  background-color: black;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 600px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  h1 {
    margin: 0;
    &::after {
      content: "new";
      display: block;
      position: absolute;
      text-transform: lowercase;
      color: var(--primary);
      font-size: 0.2em;
      top: 0;
      right: 0;
      transform: translate(-10px, -10px);
    }
  }
  p {
    max-width: 400px;
    margin: 0 auto;
  }
  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 20%);
    width: 80%;
  }
`

export const separator = css`
  position: relative;
`
