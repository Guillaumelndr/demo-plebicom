import * as actions from './actions'

const addCartItem = (state, item) => {
  return { ...state, items: [...state.items, item] }
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_CART_ITEM:
      return addCartItem(state, action.payload)
    default:
      throw new Error()
  }
}

export default reducer
