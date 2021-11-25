import React from "react";
import { connect } from "react-redux";
import { ErrorModalClose } from "../actions";
import Modal from "./Modal";

function ErrorModal(props) {
  return (
    <Modal>
      <h3>Already present in the Cart</h3>
      <button
        type="button"
        className="btn btn-danger ms-1 px-4"
        onClick={() => props.closeModal()}
      >
        Close
      </button>
    </Modal>
  );
}
const mapStateToProps=function(state){
  return state;
}
const mapDispatchToProps={
  closeModal:ErrorModalClose
}
const ErrorModalContainer=connect(mapStateToProps,mapDispatchToProps)(ErrorModal);
export default ErrorModalContainer;