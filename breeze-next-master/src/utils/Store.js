import { createContext, useReducer } from 'react'
import Cookies from 'js-cookie'

export const Store = createContext()
const initialState = {
    darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
    cart: {
        cartItems: [],
    },
}

function reducer(state, action) {
    switch (action.type) {
        case 'DARK_MODE_ON':
            return { ...state, darkMode: true }
        case 'DARK_MODE_OFF':
            return { ...state, darkMode: false }
        case 'ADD_TO_CART':
            // eslint-disable-next-line no-case-declarations
            const newItem = action.payload
            // eslint-disable-next-line no-case-declarations
            const existItem = state.cart.cartItems.find(item => {
                // eslint-disable-next-line no-unused-expressions
                newItem.id === item.id
            })
            // eslint-disable-next-line no-case-declarations
            const cartItems = existItem
                ? state.cart.cartItems.map(item => {
                      // eslint-disable-next-line no-unused-expressions
                      item.id === existItem.id ? existItem : item
                  })
                : { ...state.cart.cartItems, newItem }
            return { ...state, cart: { cartItems } }
        default:
            return state
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}
