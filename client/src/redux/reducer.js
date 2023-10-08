import { Add_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"
export const cartData=(data=[], action)=>{
    // console.warn('reducer called',action)
    // return 'abc'
    // if(action.type === Add_TO_CART){
    //     console.warn("reducer called", action)
    //     return action.data
    // }else{
    //     return "no action matched"
    // }
     switch(action.type){
        case Add_TO_CART:
            console.warn('Add_TO_CART',action)
            // add to cart logic
        return [action.data, ...data];

        case REMOVE_FROM_CART:
            console.warn('REMOVE_FROM_CART',action)
            // Remove from cart logic
            //  data.length=data.length ? data.length-1 : []
            const remainingItem= data.filter((item)=>item.id!==action.data)
            console.warn("remainingItems", remainingItem);
        return [...remainingItem];

        case EMPTY_CART:
            console.warn('EMPTY_CART',action)
            data=[]
        return[...data]

        default:
            // no case matched
            return data;
     }

}