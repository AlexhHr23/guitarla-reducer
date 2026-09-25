import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

export type CartActions =
    { type: 'add-to-cart', paylod: { item: Guitar } } |
    { type: 'remove-from-cart', paylod: { id: CartItem['id'] } } |
    { type: 'increase-quantity', paylod: { id: CartItem['id'] } } |
    { type: 'decrease-quantity', paylod: { id: CartItem['id'] } } |
    { type: 'clean-cart' }


export type CartState = {
    data: Guitar[]
    cart: CartItem[]
}

export const initialState: CartState = {
    data: db,
    cart: [],
}

const MIN_ITEMS = 1
const MAX_ITEMS = 5

export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {

    if (action.type === 'add-to-cart') {

        const itemExists = state.cart.find(guitar => guitar.id === action.paylod.item.id)
        let updatedCart: CartItem[] = []
        if (itemExists) { // existe en el carrito
            updatedCart = state.cart.map(item => {
                if (item.id === action.paylod.item.id) {
                    if (item.quantity < MAX_ITEMS) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                } else {
                    return item
                }
            })
        } else {
            const newItem: CartItem = { ...action.paylod.item, quantity: 1 }
            updatedCart = [...state.cart, newItem]
        }

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'remove-from-cart') {
        const updatedCart = state.cart.filter(item => item.id !== action.paylod.id)
        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'increase-quantity') {
        const updatedCart = state.cart.map(item => {
            if (item.id === action.paylod.id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'decrease-quantity') {
        const updatedCart = state.cart.map(item => {
            if (item.id === action.paylod.id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'clean-cart') {
        
        return {
            ...state,
            cart: []
        }
    }
}

