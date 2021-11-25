const initialstate = { count:0 };
const OrderReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_ORDER_ITEMS": {
 
      return { ...state, count:state.count+1 };
    }
    default:
      return state;
  }
};
export default OrderReducer;
