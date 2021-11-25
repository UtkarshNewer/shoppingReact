import React,{useState} from 'react'
import ItemRemoveModal from './ItemRemoveModal';
import { connect } from 'react-redux';
import { addOrderItems } from '../actions';

function QuantitySelect(props) {
    const [itemCount,setItemCount]=useState(1);
    const [removeItem,setRemoveItem]=useState(false);
    const addHandler=()=>{
        setItemCount(prev=>prev+1);
        props.getQuantity(itemCount+1);
        props.addOrderItems();
    }
    const minusHandler=()=>{
        setItemCount(prev=>prev-1);
        if(itemCount===1){
            // console.log("remove item")
            setRemoveItem(true);
        }
        props.getQuantity(itemCount-1);
        props.addOrderItems();
    }
    
    const closeModalHandler=()=>{
        setItemCount(1);
        setRemoveItem(false);
    }
    
    return (
        <div className="d-flex">
            <button className="btn btn-primary rounded-0" type="button" onClick={addHandler}>+</button>
            <input className="px-0 mx-1 w-50 border" type="number" max="5" readOnly value={itemCount}/>
            <button className="btn btn-primary rounded-0" type="button" onClick={minusHandler}>-</button>
            {removeItem && <ItemRemoveModal close={closeModalHandler} item={props.item}/>}
        </div>
    )
}
const mapStateToProps = function (state) {
    return state;
  };
  const mapDispatchToProps={
      addOrderItems:addOrderItems
  }
  const QuantitySelectContainer = connect(mapStateToProps,mapDispatchToProps)(QuantitySelect);
  export default QuantitySelectContainer;