import { Add_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"


export const addToCart =(data)=>{
    console.warn("Action called", data)
    return {
        type: Add_TO_CART,
        data
    }    
}
export const removeFromCart =(data)=>{
    console.warn("Remove action is called", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }  
}
export const emptyCart=(data)=>{
    console.warn("action from EmptyCart", data)
    return{
        type: EMPTY_CART,
        data
    }
}