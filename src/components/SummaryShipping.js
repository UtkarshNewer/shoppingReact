import React from "react";
import SummaryItems from "./SummaryItems";
import classes from './SummaryShipping.module.css'

export default function SummaryShipping(props) {
  // console.log(props);
  return (
    <div className={`card p-1 pt-2 mt-4 mt-lg-0  ms-2 ms-lg-0 w-lg-100 ${classes.summaryCard}`}>
        <h3>Summary</h3>
      <div className="pt-3 border-top">
        {props.orderDetails.items.map((item) => (
          <SummaryItems item={item} key={`${item.id}${item.size}`} />
        ))}
      </div>
      <div className="d-flex justify-content-between">
          <span>SUBTOTAL(incl. taxes)</span>
          <div >${props.orderDetails.cost}</div>
      </div>
      <div className="d-flex justify-content-between">
          <span>SHIPPING</span>
          <div>${props.shippingFee===0?0:props.shippingFee.shipping}</div>
      </div>
      <div className="d-flex justify-content-between">
          <h4>TOTAL</h4>
          <div>${parseFloat(props.orderDetails.cost) + (props.shippingFee===0?0:parseFloat(props.shippingFee.shipping))}</div>
      </div>
    </div>
  );
}
