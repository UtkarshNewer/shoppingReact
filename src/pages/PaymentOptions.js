import React from "react";
import BottomNav from "../components/BottomNav";
import PaymentNav from "../components/PaymentNav";
import NavigationBar from "../components/NavigationBar";
import { useLocation } from "react-router";
import PaymentOptionsSelect from "../components/PaymentOptionsSelect";
import SummaryShipping from "../components/SummaryShipping";
export default function PaymentOptions() {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <NavigationBar />
      <PaymentNav />
      <div className="row w-100">
        <div className="col-md-8">
          {" "}
          <PaymentOptionsSelect orderDetails={location.state}/>
        </div>
        <div className="col-md-4 ">
          <SummaryShipping
            orderDetails={location.state.items}
            shippingFee={location.state.shippingFee}
          />
        </div>
      </div>
      <BottomNav />
    </>
  );
}
