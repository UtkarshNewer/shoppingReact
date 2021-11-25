import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Help from "./pages/Help";
import Home from "./pages/Home";
import PaymentOptions from "./pages/PaymentOptions";
import PlaceOrder from "./pages/PlaceOrder";
import ProductDescription from "./pages/ProductDescription";
import ShippingDetails from "./pages/ShippingDetails";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/shop/:id">
          <ProductDescription />
        </Route>
        <Route exact path="/order-details">
          <ShippingDetails />
        </Route>
        <Route exact path="/payment">
          <PaymentOptions />
        </Route>
        <Route exact path="/place-order">
          <PlaceOrder />
        </Route>
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
