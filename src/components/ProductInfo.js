import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { AddItemInCart, FetchProducts, FetchReviews } from "../actions";
import DropDownModel from "./DropDownModel";
import classes from "./ProductInfo.module.css";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import Reviews from "./Reviews";
import ErrorModal from "../components/ErrorModal"
function ProductInfo(props) {
  console.log(props);
  const location = useLocation();
  const myparam = location.state.params;
  const [zoomedImage, setZoomedImage] = useState(myparam.image);
  const starRating = myparam.rating / 20;
  const [size, setSize] = useState("XS");

  useEffect(() => {
    props.fetchReviews(myparam.id);
  }, []);
  const getSizeHandler = (size) => {
    setSize(size);

  };
  const sizeAddHandler = () => {
    console.log(location.state.params);
    props.addItem({...location.state.params,size:size});
  };
  return (
    <>
      <div className="card mb-3 mx-5 mt-5">
        <div className="row">
          <div className="col-md-4">
            <img src={zoomedImage} alt="image1" className="w-100" />
            <div className={classes.secondaryImages}>
              <div
                className={classes.images}
                onClick={() => {
                  setZoomedImage(myparam.image);
                }}
              >
                <img src={myparam.image} alt="replace1" className="w-100" />
              </div>
              <div
                className={classes.images}
                onClick={() => {
                  setZoomedImage(myparam.secondaryImage1);
                }}
              >
                <img
                  src={myparam.secondaryImage1}
                  alt="replace1"
                  className="w-100"
                />
              </div>
              <div
                className={classes.images}
                onClick={() => {
                  setZoomedImage(myparam.secondaryImage2);
                }}
              >
                <img
                  src={myparam.secondaryImage2}
                  alt="replace1"
                  className="w-100"
                />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{myparam.title}</h2>
              <StarRatings
                className="mt-4"
                rating={starRating}
                starSpacing="0.2em"
                starDimension="1em"
              />
              <h6>{props.reviewReducer.reviews!== undefined && props.reviewReducer.reviews.length} reviews</h6>
              <div className={`d-flex mt-5 ${classes.price_dropDown}`}>
                <h4 className="me-lg-5">${myparam.price}</h4>
                <div className="d-flex align-items-center">
                  <h6 className="me-2 mb-0">Select Size:</h6>
                  <DropDownModel size={getSizeHandler} />
                </div>
              </div>
              <h6 className="card-info mt-5 me-5">{myparam.description}</h6>
              <button type="button" className="btn btn-danger my-5 " onClick={sizeAddHandler}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {props.reviewReducer.reviews !== undefined &&
        props.reviewReducer.reviews !== " " &&
        props.reviewReducer.reviews.map((item) => (
          <Reviews info={item} key={item.id} />
        ))}
        {props.errorReducer.error &&  <ErrorModal/> }
    </>
  );
}

const mapStateToProps = function (state) {
  return state;
};
const mapDispatchToProps = {
  fetchProducts: FetchProducts,
  fetchReviews: FetchReviews,
  addItem: AddItemInCart,
};
const ProductInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfo);
export default ProductInfoContainer;
