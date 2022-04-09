import { createContext, useReducer } from 'react'
import Cookies from 'js-cookie'

export const Store = createContext()
const initialState = {
    darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
    cart: {
        cartItems: Cookies.get('cartItems')
            ? JSON.parse(Cookies.get('cartItems'))
            : [],
        shippingAddress: Cookies.get('shippingAddress')
            ? JSON.parse(Cookies.get('shippingAddress'))
            : {},
        paymentMethod: Cookies.get('paymentMethod')
            ? Cookies.get('paymentMethod')
            : '',
    },
    order: {
        content: Cookies.get('order')
            ? JSON.parse(JSON.stringify(Cookies.get('order')))
            : '',
        loading: true,
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
        case 'ADD_SHIPPING_ADDRESS':
            const shippingAddress = action.payload
            Cookies.set('shippingAddress', JSON.stringify(shippingAddress))
            return {
                ...state,
                cart: { ...state.cart, shippingAddress },
            }
        case 'SAVE_PAYMENT_METHOD':
            const paymenMethod = action.payload
            Cookies.set('paymentMethod', paymenMethod)
            return { ...state, paymentMethod: paymenMethod }
        case 'CART_CLEAR':
            Cookies.remove('cartItems')
            return { ...state, cart: { ...state.cart, cartItems: [] } }
        case 'ORDER_ITEMS':
            //console.log("hi")
            const order = action.payload.response.data
            Cookies.set('order', order)
            return { ...state, order: { content: order, loading: false } }
        default:
            return state
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}
