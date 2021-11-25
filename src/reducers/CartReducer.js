const initialstate={cartItems:[]}
const CartReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "ADD_ITEM_TO_CART":
            return {...state,cartItems:state.cartItems.concat(action.cartItem)}
        case "REMOVE_CART_ITEM":{
            return {...state,cartItems:state.cartItems.filter(item=>item!==action.cartItem)}
        }
        case "EMPTY_CART":{
            return {...state,cartItems:[]}
        }
        default:
            return state;
    }
}
export default CartReducer;