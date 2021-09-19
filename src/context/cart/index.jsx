import React, { useReducer, createContext } from 'react'
import PropTypes from 'prop-types'
import reducer from './reducer'

const cart = {
  items: []
}

const cartContext = createContext(cart)
const { Provider } = cartContext

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, cart)

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node
}

export { cartContext, CartProvider }
