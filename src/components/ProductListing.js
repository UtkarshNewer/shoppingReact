import React, { useEffect, useState } from "react";
import ProductTile from "./ProductTile";
import classes from "./ProductListing.module.css";
import { FetchProducts } from "../actions";
import {connect} from "react-redux"

function ProductListing(props) {
  const [upper, setUpper] = useState(12);
  const [showMore, setShowMore] = useState(true);
  useEffect(() => {
    props.fetchProducts();
  },[]);
  const moreResultHandler = () => {
    if (props.productReducer.productsInfo.length > upper) {
     
      setUpper((prev) => prev + 12);
    } else {
      setShowMore(false);
    }
  };
  // console.log(props);
  return (
    <div className={`d-flex row ps-md-5 mt-5 w-100 mb-5 ${classes.listing}`}>
      <h2 className="d-flex justify-content-center">Product Listing</h2>
      <p className="d-flex justify-content-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      {props.productReducer.isLoading && (
        <h5 className="d-flex justify-content-center">
          Loading please wait....
        </h5>
      )}
      {props.productReducer.productsInfo !== undefined && props.searchCategory==='' && props.productReducer.productsInfo.slice(0, upper).map((item) => {
            return <ProductTile key={item.id} info={item} />;
          })}
      {props.searchCategory !=='' && props.productReducer.productsInfo.map((item)=>{
          if(item.category.toLowerCase()===props.searchCategory)
            return <ProductTile key={item.id} info={item} />;
          else
            return null
      })}
      {/* {props.searchCategory !=='' && } */}
      {showMore && (
        <div className={`d-block text-center mt-4 ${classes.showmore}`}>
          <button
            type="button"
            onClick={moreResultHandler}
            className="btn btn-danger justify-content-center"
          >
            more
          </button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps=function(state){
  return state;
}
const mapDispatchToProps={
  fetchProducts:FetchProducts
}
const ProductListingContainer=connect(mapStateToProps,mapDispatchToProps)(ProductListing);
export default ProductListingContainer 