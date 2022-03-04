import { createContext, useReducer } from 'react'
import Cookies from 'js-cookie'

export const Store = createContext()
const initialState = {
    darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
    cart: {
        cartItems: Cookies.get('cartItems')
            ? JSON.parse(Cookies.get('cartItems'))
            : [],
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
            const existItem = state.cart.cartItems.find(
                item => item?.id === newItem.id,
            )

            // eslint-disable-next-line no-case-declarations
            const cartItems = existItem
                ? state.cart.cartItems.map(item =>
                      item.id === existItem.id ? newItem : item,
                  )
                : [...state.cart.cartItems, newItem]

            //console.log(cartItems)
            Cookies.set('cartItems', JSON.stringify(cartItems))

            return { ...state, cart: { ...state.cart, cartItems } }
        case 'REMOVE_FROM_CART':
            const toRemove = action.payload
            const newCartItems = state.cart.cartItems.filter(
                item => item.id !== toRemove.id,
            )
            Cookies.set('cartItems', JSON.stringify(newCartItems))

            return {
                ...state,
                cart: { ...state.cart, cartItems: newCartItems },
            }
        default:
            return state
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}
