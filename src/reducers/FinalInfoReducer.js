const initialstate = {};
const FinalInfoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_ORDER_ITEM_DETAILS": {
      return { ...state, items: action.type };
    }
    case "ADD_SHIPPING_DETAILS": {
        return { ...state, shippingDetails:action.type };
      }
    case "ADD_PAYMENT_DETAILS": {
        return { ...state, payment:action.type };
      }
    default:
      return state;
  }
};
export default FinalInfoReducer;