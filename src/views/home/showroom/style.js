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
  }
  p {
    max-width: 400px;
    margin: 0;
  }
  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 20%);
    width: 80%;
    filter: hue-rotate(45deg) brightness(1);
  }
`
