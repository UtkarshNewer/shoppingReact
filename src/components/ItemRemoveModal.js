import React from 'react'
import { connect } from 'react-redux';
import { filterCartItems } from '../actions';
import Modal from './Modal'

function ItemRemoveModal(props) {
    const removeItemHandler=()=>{
        console.log(props);
        props.updateCart(props.item);
    }
    const closeModalHandler=()=>{
        props.close();
    }
    return (
        <Modal>
            <h3>Remove Item from Cart?</h3>
            <button className="btn btn-danger me-2" onClick={removeItemHandler}>Yes</button>
            <button className="btn btn-primary" onClick={closeModalHandler}>No</button>
        </Modal>
    )
}
const mapStateToProps=(state)=>{
    return state;
}
const mapDispatchToProps={
    updateCart:filterCartItems,
}
const ItemRemoveModalContainer=connect(mapStateToProps,mapDispatchToProps)(ItemRemoveModal);
export default ItemRemoveModalContainer;