import { css } from '@emotion/css'

export const select = css`
  position: relative;

  select {
    appearance: none;
    display: inline-block;
    border-radius: var(--btn-border-radius);
    background-color: var(--black);
    padding: var(--btn-padding);
    padding-right: 50px;
    font-size: 0.9em;
    color: var(--white);
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    background-image: linear-gradient(45deg, transparent 50%, #ffffff 50%), linear-gradient(135deg, #ffffff 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
  }
`
