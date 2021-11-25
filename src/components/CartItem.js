// import { debounce } from "lodash";
import React from "react";
// import { connect } from "react-redux";
// import { addOrderItems } from "../actions";
import QuantitySelect from "./QuantitySelect";

function CartItem(props) {
//   const [order, setOrder] = useState([]);
  const getQuantity = (quantity) => {
    props.item.quantity=quantity;
    // props.getItemHandler(props.item);
    // console.log(props)
    // const newItem=[];
    // newItem.push(props.item)
    // props.getItem(newItem);
  };
  
  return (
    <div className="card mb-3">
      <div className="row g-0 mb-2 mx-2">
        <div className="col-md-4">
          <img className="w-100" src={props.item.image} alt="productImage" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4>{props.item.title}</h4>
            <p>{props.item.description}</p>
            <h6>${props.item.price}</h6>
            <h6>{props.item.size}</h6>
            <div className="w-50">
              <QuantitySelect item={props.item} getQuantity={getQuantity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const mapStateToProps=state=>{
//     return state;
// }
// const mapDispatchToProps={
//     addOrderItems:addOrderItems
// }
// const CartItemContainer=connect(mapStateToProps,mapDispatchToProps)(CartItem)
export default CartItem;