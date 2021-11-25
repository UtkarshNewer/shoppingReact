import React, { useState } from "react";
import { AddItemInCart} from "../actions";
import DropDownModel from "./DropDownModel";
import Modal from "./Modal";
import { connect } from "react-redux";

function ModalInputForm(props) {
  console.log(props);
  const [size, setSize] = useState("XS");
  const getSizeHandler = (size) => {
    // console.log(size);
    setSize(size);
  };
  const sizeAddHandler = () => {
    props.addItem({...props.cartItem,size:size});
    props.hideCart();
  };

  return (
    <Modal>
      <h3>Please Select Size</h3>
      <DropDownModel size={getSizeHandler} />
      <div className="mt-2">
        <button
          type="button"
          className="btn btn-primary px-4"
          onClick={sizeAddHandler}
        >
          OK
        </button>
        <button
          type="button"
          className="btn btn-danger ms-1 px-4"
          onClick={() => props.hideCart()}
        >
          Close
        </button>
      </div>
      
    </Modal>
  );
}
const mapStateToProps = function (state) {
  return state;
};

const mapDispatchToProps = {
  addItem: AddItemInCart,
};
const ModalInputFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalInputForm);
export default ModalInputFormContainer;
