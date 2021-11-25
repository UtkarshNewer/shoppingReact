import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StarRatings from "react-star-ratings";
import classes from "./ProductTile.module.css";
import { FetchProducts } from "../actions";
import { connect } from "react-redux";
import ModalInputForm from "./ModalInputForm";

function ProductTile(props) {
  const rating = props.info.rating / 20;
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const showCartModalHandler = () => {
    setShowModal(true);
  };
  const hideCartModalHandler = () => {
    setShowModal(false);
  };
  return (
    <div className={`card mb-3 mt-3 mx-2 mx-md-auto ${classes.tile}`}>
      <div className="row g-0">
        <div className={`col-xl-7 ${classes.imageButton}`}>
          <img
            src={props.info.image}
            className={`img-fluid rounded-start p-1 ${classes.image}`}
            alt="..."
          />
          <div className={classes.overlay}></div>
          <div className={classes.addToCart}>
            <button
              className={` ${classes.addButton}`}
              onClick={showCartModalHandler}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="col-xl-5">
          <div
            className="card-body "
            onClick={() =>
              history.push(`/shop/${props.info.id}`, {
                params: props.productReducer.productsInfo[props.info.id-1],
              })
            }
          >
            <h5 className={`card-title ${classes.tileItemName}`}>
              {props.info.title}
            </h5>
            <p className="card-text">${props.info.price}</p>
            <div className={`align-self-end ${classes.ratings}`}>
              <StarRatings
                rating={rating}
                starSpacing="0.2em"
                starDimension="1em"
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && <ModalInputForm hideCart={hideCartModalHandler} cartItem={props.info} />}
    </div>
  );
}
const mapStateToProps = function (state) {
  return state;
};
const mapDispatchToProps = {
  fetchProducts: FetchProducts,
};
const ProductTileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductTile);
export default ProductTileContainer;
