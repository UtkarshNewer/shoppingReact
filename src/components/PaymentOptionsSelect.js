import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import classes from "./PaymentOptionsSelect.module.css";

export default function PaymentOptionsSelect(props) {
  const history = useHistory();
  const today = new Date();
  const mm = today.getMonth();
  const yy = today.getFullYear();
  console.log(mm, yy);
  const cardInputRef = useRef();
  const monthInputRef = useRef();
  const cvvRef = useRef();
  const holderRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const [dateIsValid, setDateIsValid] = useState(true);
  const [cvvIsValid, setCvvIsValid] = useState(true);
  const [cardHolderIsValid, setCardHolderIsValid] = useState(true);
  const [selectRadio, setSelectRadio] = useState("");
  const [enableButton, setEnableButton] = useState(true);
  const [paymentDetails,setPayMentDetails]=useState('');
  const cardInputHandler = () => {
    if (
      isNaN(cardInputRef.current.value) ||
      cardInputRef.current.value.length !== 16
    )
      setIsValid(false);
    else setIsValid(true);
  };
  const cardBlurHandler = () => {
    if (cardInputRef.current.value === "") setIsValid(false);
    else setIsValid(true);
  };
  const monthHandler = () => {
    const array = monthInputRef.current.value.split("-");
    if (array[0] < yy || array[1] < mm) setDateIsValid(false);
    else setDateIsValid(true);
  };
  const monthBlurHandler = () => {
    if (monthInputRef.current.value === "") setDateIsValid(false);
    else setDateIsValid(true);
  };
  const cvvHandler = () => {
    if (isNaN(cvvRef.current.value) || cvvRef.current.value.length !== 3)
      setCvvIsValid(false);
    else setCvvIsValid(true);
  };
  const cvvBlurHandler = () => {
    if (cvvRef.current.value === "") setDateIsValid(false);
    else setDateIsValid(true);
  };
  const holderOnChangeHandler=()=>{
    if (holderRef.current.value.length<6) setCardHolderIsValid(false);
    else setCardHolderIsValid(true);
  }
  const holderBlurHandler = () => {
    if (holderRef.current.value === "") setCardHolderIsValid(false);
    else setCardHolderIsValid(true);
  };
  const radioHandler = (e) => {
    const { name, value } = e.target;
    setSelectRadio({ [name]: value });
  };
  const submitHandler = () => {
    history.push({pathname:"/place-order",state:{orderDetails:props.orderDetails,paymentDetails:paymentDetails}})
  };

  useEffect(() => {
    if (selectRadio.payment === "cash") {
      setEnableButton(false);
      setPayMentDetails('cash')
    } else if (selectRadio.payment==="credit-card"){
      if(cardInputRef.current.value==="" || monthInputRef.current.value===""||cvvRef.current.value==="" ||holderRef.current.value===""|| !isValid|| !dateIsValid|| !cvvIsValid || !cardHolderIsValid )
          setEnableButton(true);
      else {
        setEnableButton(false);
        setPayMentDetails({
          cardNumber:cardInputRef.current.value,
          expiry:monthInputRef.current.value,
          cvv:cvvRef.current.value,
          holderName:holderRef.current.value,
        })
      }
    }
    else{
      setEnableButton(true);
    }
  }, [selectRadio.payment,isValid, dateIsValid, cvvIsValid, cardHolderIsValid]);

  return (
    <div className={`ms-5 ${classes.shippingDetails} `}>
      <h3>Payment method</h3>
      <div className="border p-4 ">
        <input
          className={classes.radioSelect}
          type="radio"
          name="payment"
          value="credit-card"
          id="Credit-Card"
          onChange={radioHandler}
          checked={selectRadio.payment === "credit-card"}
        />
        <label className="ps-0 w-100" htmlFor="Credit-Card">
          <h4>Credit Card</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="row mb-2 ">
            <div className="col-md-6">
              <input
                className={`ps-lg-5 ps-0 me-2 w-100 mb-1 ${
                  !isValid && classes.wrongInput
                }`}
                type="text"
                pattern="[0-9]{12}"
                placeholder="0000   0000   0000   0000"
                onChange={cardInputHandler}
                ref={cardInputRef}
                onBlur={cardBlurHandler}
                disabled={selectRadio.payment !== "credit-card"}
              />
            </div>
            <div className="col-md-3">
              <input
                className={`ps-lg-5 ps-0 w-100 mb-1 ${
                  !dateIsValid && classes.wrongInput
                }`}
                type="month"
                ref={monthInputRef}
                onChange={monthHandler}
                onBlur={monthBlurHandler}
                disabled={selectRadio.payment !== "credit-card"}
              />
            </div>
            <div className="col-md-3 ">
              <input
                className={`ps-lg-5 ps-0 w-100 mb-1 ${
                  !cvvIsValid && classes.wrongInput
                }`}
                type="text"
                pattern="[0-9]{3}"
                placeholder="CVV"
                ref={cvvRef}
                onChange={cvvHandler}
                onBlur={cvvBlurHandler}
                disabled={selectRadio.payment !== "credit-card"}
              />
            </div>
          </div>
          <input
            className={`ps-lg-5 ps-0 w-100 ${
              !cardHolderIsValid && classes.wrongInput
            }`}
            type="text"
            placeholder="Card Holder Name"
            ref={holderRef}
            onBlur={holderBlurHandler}
            onChange={holderOnChangeHandler}
            disabled={selectRadio.payment !== "credit-card"}
          />
        </label>
      </div>
      <div className="border p-4 mt-4">
        <input
          className={classes.radioSelect}
          type="radio"
          name="payment"
          value="cash"
          checked={selectRadio.payment === "cash"}
          id="Cash-On-delivery"
          onChange={radioHandler}
        />
        <label htmlFor="Cash-On-delivery" className="w-100">
          <h4>Cash-On delivery</h4>
          <p>
            Vivamus dictum molestie neque vel viverra. Ut blandit dignissim
            risus non euismod. Aliquam sem metus, accumsan eget iaculis vel,
            aliquam mattis risus.
          </p>
        </label>
      </div>
      <div className="mt-2 mb-5">
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={submitHandler}
          disabled={enableButton}
        >
          Pay Now
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => history.goBack()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
