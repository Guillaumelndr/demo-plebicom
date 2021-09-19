import { css } from '@emotion/css'

export const container = css`
    position: relative;
    user-select: none;
`

export const badge = css`
  background-color: var(--primary);
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  height: 15px;
  width: 15px;
  font-weight: 800;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(7px, -2px);
`
