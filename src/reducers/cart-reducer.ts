import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

export type cartActions = 
    { type: 'add-to-cart', payload: {item: Guitar} } |
    { type: 'remove-from-cart', payload: {id: Guitar['id']} } |
    { type: 'decrease-quantity', payload: {id: Guitar['id']} } |
    { type: 'increase-quantity', payload: {id: Guitar['id']} } |
    { type: 'clear-cart' }

export type cartState = {
    data: Guitar[]
    cart: CartItem[]
}

export const initialState : cartState = {
    data: db,
    cart: []
}

export const cartReducer = (
    state: cartState = initialState,
    action: cartActions
) => {
    if(action.type === 'add-to-cart') {
        return {
            ...state
        }
    }

    if(action.type === 'remove-from-cart') {
        return {
            ...state
        }
    }
    if(action.type === 'decrease-quantity') {
        return{
            ...state
        }
    }
    if(action.type === 'increase-quantity') {
        return {
            ...state
        }
    }
    if(action.type === 'clear-cart') {
        return {
            ...state
        }
    }

    return state
}