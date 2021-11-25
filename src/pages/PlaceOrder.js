import React from "react";
import { useHistory, useLocation } from "react-router";
import BottomNav from "../components/BottomNav";
import NavigationBarContainer from "../components/NavigationBar";

export default function PlaceOrder() {
  const location = useLocation();
  console.log(location.state);
  const history=useHistory();
  const renderTableData = () => {
    return location.state.orderDetails.items.items.map((item) => {
      const { title, size, price, quantity, id } = item;
      //   console.log(title);
      return (
        <tr key={id}>
          <td className="border px-2">{id}</td>
          <td className="border px-2">{title}</td>
          <td className="border px-2">{size}</td>
          <td className="border px-2">{price}</td>
          
          <td className="border px-2">{quantity===undefined ? 1: quantity}</td>
        </tr>
      );
    });
  };
  const renderTableHeader = () => {
    return (
      <>
        <th className="border px-2 w-25">id</th>
        <th className="border px-2">Title</th>
        <th className="border px-2">Size</th>
        <th className="border px-2">Prize</th>
        <th className="border px-2">Quantity</th>
      </>
    );
  };
  const handleClick=()=>{
    history.push("/shop");
    window.location.reload(false);
  }
  return (
    <>
      <NavigationBarContainer />
      <div className="d-block mt-5  text-center">
        <h3>Your order has been Placed</h3>
        <p>
          Integer consectetur nisi id turpis consequat rhoncus. Quisque dolor
          arcu, ullamcorper ut nibh quis, molestie mollis ante. Fusce nec congue
          odio.{" "}
        </p>
        <button className="btn btn-primary" type="submit" onClick={handleClick}>
          Continue Shopping
        </button>
        <div>
          <h4>Ordered Items:</h4>
          <div className="d-flex justify-content-center">
            <table id="orderedItems ">
              <tbody className="border text-center ">
                <tr>{renderTableHeader()}</tr>
                {renderTableData()}
              </tbody>
            </table>
          </div>
          <div>
            <h5 className="mt-4">
              Total Cost: ${location.state.orderDetails.items.cost}
            </h5>
            <h6>
              Shipping Address:
              {location.state.orderDetails.shippingDetails.address},{" "}
              {location.state.orderDetails.shippingDetails.additionalAddress},{" "}
              {location.state.orderDetails.shippingDetails.city},{" "}
              {location.state.orderDetails.shippingDetails.country}
            </h6>
            <p>
              Name:{location.state.orderDetails.shippingDetails.firstName}{" "}
              {location.state.orderDetails.shippingDetails.lastName}
            </p>
            <p>
              Phone number:{" "}
              {location.state.orderDetails.shippingDetails.phoneNumber}
            </p>
            <h6>
              Payment Type:{" "}
              {location.state.paymentDetails === "cash"
                ? "Cash"
                : "Credit-card"}
            </h6>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
