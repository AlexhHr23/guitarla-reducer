import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

export type CartActions =
    { type: 'add-to-cart', paylod: { item: Guitar } } |
    { type: 'remove-from-cart', paylod: { id: Guitar['id'] } } |
    { type: 'increase-quantity', paylod: { id: Guitar['id'] } } |
    { type: 'decrease-quantity', paylod: { id: Guitar['id'] } } |
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
        
        return {
            ...state
        }
    }
}

