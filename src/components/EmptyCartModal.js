import React from 'react'
import { connect } from 'react-redux';
import { emptyCart, ErrorModalClose } from '../actions';

import Modal from './Modal'

function EmptyCartModal(props) {
    return (
        <Modal>
            <h3>Are you sure you want to empty Cart?</h3>
            <button type="button" className="btn btn-primary" onClick={()=>props.emptyCart()}>Yes</button>
            <button type="button" className="btn btn-danger" onClick={() => props.closeModal()}>No</button>
        </Modal>
            
    )
}

const mapStateToProps=(state)=>{
    return state;
  }
  const mapDispatchToProps={
    closeModal:ErrorModalClose,
    emptyCart:emptyCart,
  }
  const EmptyCartModalContainer=connect(mapStateToProps,mapDispatchToProps)(EmptyCartModal);
  export default EmptyCartModalContainer;