import { useEffect, useRef } from 'react'

export const useGsapToggle = state => {
  const tl = useRef()

  useEffect(() => () => tl.current?.kill(), [])

  useEffect(() => {
    if (state) {
      tl.current?.play()
    } else {
      tl.current?.reverse()
    }
  }, [state, tl])

  return tl
}
