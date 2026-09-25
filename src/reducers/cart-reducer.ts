import { CartItem, Guitar } from "../types";

export type CartActions =
    { type: 'add-to-cart', paylod: { item: Guitar } } |
    { type: 'remove-from-cart', paylod: { id: Guitar['id'] } } |
    { type: 'increase-quantity', paylod: { id: Guitar['id'] } } |
    { type: 'decrease-quantity', paylod: { id: Guitar['id'] } } |
    { type: 'clean-cart' }


export type CartState = {
    cart: CartItem[]
    activeId: CartItem['id']
}

export const initialState: CartState = {
    cart: [],
    activeId: 0
}

const MIN_ITEMS = 1
const MAX_ITEMS = 5

export const activityReducer = (
    state: CartState = initialState,
    action: CartActions
) => {

    if (action.type === 'add-to-cart') {
        
    }
}

