// import { debounce } from "lodash";
import { connect } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import classes from "./Summary.module.css";
import { addOrderItems } from "../actions";

function Summary(props) {
  const [inputWrong, setInputWrong] = useState(true);
  const [totalvalue, setTotalValue] = useState("");

  useEffect(() => {
    props.getTotalAmount(totalvalue);
    if (inputWrong === true) setTotalValue(props.cost + 15);
    else setTotalValue(props.cost - props.cost / 10);
  }, [props, totalvalue]);

  //   console.log(props);
  const couponCodeHandler = useCallback(
    (e) => {
      setInputWrong(false);
      if (e.target.value === "BOOTCAMP2021") {
        setTotalValue(props.cost - props.cost / 10);
        props.getTotalAmount(props.cost - props.cost / 10);
      } else {
        setTotalValue(props.cost + 15);
        setInputWrong(true);
      }
    },
    [props]
  );

  //   console.log(cost);
  return (
    <div className={classes.summary}>
      <h3 className="border-bottom">SUMMARY</h3>
      <button
        className="btn btn-primary ps-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
      >
        ENTER COUPON CODE
      </button>
      <div className="collapse " id="collapseExample">
        <div className="card card-body w-50 p-1 m-1">
          <input
            type="text"
            className={inputWrong ? classes.inputWrong : classes.input}
            onChange={couponCodeHandler}
          />
          {inputWrong && <p className="text-danger">Coupon code is Invalid!</p>}
          {!inputWrong && <p className="text-primary">Applied Coupon!</p>}
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <span>SUBTOTAL</span>
          <div className="align-self-end">${props.cost}</div>
        </div>
        <div className="d-flex justify-content-between">
          <span>SHIPPING</span>
          <div>FREE</div>
        </div>
        <div className="d-flex justify-content-between">
          <span>TAXES</span>
          <div>$15</div>
        </div>
      </div>
      <div className="d-flex justify-content-between border-top">
        TOTAL<div>${totalvalue === "" ? props.cost : totalvalue}</div>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return state;
};
const mapDispatchToProps = {
  addOrderItems: addOrderItems,
};
const SummaryContainer = connect(mapStateToProps, mapDispatchToProps)(Summary);
export default SummaryContainer;
