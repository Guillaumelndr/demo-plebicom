import React from 'react'
import ReactDOM from 'react-dom'

import { useGsapToggle } from '../../utils/gsap'



describe('useGsapToggle Hook', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')

    const App = () => {
      const timeline = useGsapToggle(true)
      return <></>
    }

    ReactDOM.render((<App />), div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('return is a react ref', () => {
    const div = document.createElement('div')

    const App = () => {
      const timeline = useGsapToggle(true)
      expect(timeline).toEqual(React.createRef())
      return <></>
    }

    ReactDOM.render((<App />), div)
    ReactDOM.unmountComponentAtNode(div)
  })

})
