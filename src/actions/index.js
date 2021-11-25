import store from "../store";
export const FetchProductStarted = () => ({
  type: "FETCH_PRODUCTS_STARTED",
});
export const FetchProductsSuccess = (info) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  info,
});
export const FetchProductsFailed = (error) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  error,
});
export const FetchProducts = () => (dispatch) => {
  dispatch(FetchProductStarted);
  fetch("https://6197dc35164fa60017c22e5b.mockapi.io/cartItemData")
    .then((res) => res.json())
    .then((json) => {
      dispatch(FetchProductsSuccess(json));
    })
    .catch((error) => dispatch(FetchProductsFailed(error)));
};
export const FetchReviewsStarted = () => ({
  type: "FETCH_REVIEWS_STARTED",
});
export const FetchReviewsSuccess = (info) => ({
  type: "FETCH_REVIEWS_SUCCESS",
  info,
});
export const FetchReviewsFailed = (error) => ({
  type: "FETCH_REVIEWS_SUCCESS",
  error,
});
export const FetchReviews = (id) => (dispatch) => {
  dispatch(FetchReviewsStarted());
  console.log("here")
  fetch(`https://6197dc35164fa60017c22e5b.mockapi.io/cartItemData/${id}/review`)
    .then((res) => res.json())
    .then((json) => {
      dispatch(FetchReviewsSuccess(json));
    })
    .catch((error) => dispatch(FetchReviewsFailed(error)));
};

export const AddItemToCart = (cartItem) => ({
  type: "ADD_ITEM_TO_CART",
  cartItem,
});
export const ErrorModal = () => ({
  type: "ERROR_MODAL",
});
export const ErrorModalClose = () => ({
  type: "ERROR_MODAL_CLOSE",
});
export const AddItemInCart = (cartItem) => (dispatch) => {
  let x = false;
  store.getState().cartReducer.cartItems.map((item) => {
    if (item.title === cartItem.title && item.size === cartItem.size) {
      dispatch({ type: "ERROR_MODAL" });
      x = true;
    }
  });
  if (x === false) {
    dispatch(AddItemToCart(cartItem));
  }
  if (store.getState().cartReducer.cartItems.length === 0) {
    dispatch(AddItemToCart(cartItem));
  }
};

export const removeItem = (cartItem) => ({
  type: "REMOVE_CART_ITEM",
  cartItem,
});

export const filterCartItems = (item) => (dispatch) => {
  // console.log(item.size);
  store
    .getState()
    .cartReducer.cartItems.forEach((cartItem) =>{
        if(cartItem.title === item.title && cartItem.size === item.size){
            console.log(cartItem);
            dispatch(removeItem(cartItem))
            dispatch(ErrorModalClose);
        }
    }
    );
  // cartItem=>cartItem.title !== item.title )
//   console.log(filteredCartItems);
//   filteredCartItems.map((filteredCartItem) => {
//     dispatch(updateCart(filteredCartItem));
//     console.log(filteredCartItem);
//   });
dispatch(ErrorModalClose);
// console.log("here");
};

export const addOrderItems=()=>({
  type:"ADD_ORDER_ITEMS",
})
export const emptyCartItems=()=>({
  type:"EMPTY_CART"
})
export const emptyCart=()=>(dispatch)=>{
  dispatch(emptyCartItems());
  console.log("here");
  dispatch({type: "ERROR_MODAL_CLOSE"});
  console.log("here2");
}