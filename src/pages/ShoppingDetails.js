import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { addOrderItems, ErrorModal } from "../actions";
import CartItem from "../components/CartItem";
import Summary from "../components/Summary";
import classes from "./ShoppingDetails.module.css";
import EmptyCartModal from '../components/EmptyCartModal'
function ShoppingDetails(props) {
  
  const [cost, setCost] = useState(0);
  const [disable,setDisable]=useState(true);
  const [finalAmount,setFinalAmount]=useState('');
  const history=useHistory();
  const [cancelCart,setCancelCart]=useState(false);
  useEffect(() => {
      console.log("useEffect FIRED!")
    setCost(0);
    props.cartReducer.cartItems.map((item) => {
      if (item.quantity === undefined) {
        setCost((prev) => prev + parseFloat(item.price));
      } 
      else {
        setCost((prev) => prev + parseFloat(item.price * item.quantity));
        // console.log(cost);
      }
    });
    if(props.cartReducer.cartItems.length!==0){
      setDisable(false);
    }
      else{
      setDisable(true);
    }
    
  }, [props.cartReducer.cartItems,props.orderReducer.count]);
  const getTotalAmount=(cost)=>{
    console.log(cost);
    setFinalAmount(cost);
    console.log(props);
  }
  const CloseModal=()=>{
    setCancelCart(false);
  }
  const ConfirmOrderHandler = () => {
      history.push({pathname:'/order-details',state:{cost:finalAmount,items:props.cartReducer.cartItems}})
    };
  return (
    <div className={`mx-2 row`}>
      <div className={`col-lg-7 ${classes.shoppinglist1}`}>
        <h3 className="ms-5 mb-3 py-1 border-bottom">Shopping Cart</h3>
        {props.cartReducer.cartItems.map((item) => (
          <CartItem
            item={item}
            key={`${item.id}${item.size}`}
            // getItemHandler={getItemHandler}
          />
        ))}
        <div className={`border-top py-2 ${classes.shoppinglist}`}>
          <button
            className="me-sm-5 mx-1 px-sm-5 btn btn-primary"
            onClick={ConfirmOrderHandler}
            type="button"
            disabled={disable}
          >
            Next
          </button>
          <button className=" px-sm-5 btn btn-secondary" type="button" onClick={()=>props.errorModal()} >
            Cancel
          </button>
          {props.errorReducer.error ? <EmptyCartModal close={CloseModal}/>: null}
        </div>
      </div>
      <div className="col-lg-4">
        <Summary cost={cost} getTotalAmount={getTotalAmount}/>
      </div>
    </div>
  );
}
const mapStateToProps = function (state) {
  return state;
};
const mapDispatchToProps = {
  addOrderItems: addOrderItems,
  errorModal:ErrorModal
};
const ShoppingDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingDetails);
export default ShoppingDetailsContainer;
