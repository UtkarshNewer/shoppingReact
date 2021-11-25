import React, { useState } from 'react'
import { connect } from 'react-redux'
import BottomNav from '../components/BottomNav'
import NavigationBar from '../components/NavigationBar'
import ProductListing from '../components/ProductListing'
import Search from '../components/Search'
import ErrorModal from '../components/ErrorModal';
function Shop(props) {
    const [searchInput,setSearchInput]=useState('');
    const searchItemHandler=(data)=>{
        setSearchInput(data);
        console.log(data);
    }
    return (
        <>
            <NavigationBar/>
            <Search searchItem={searchItemHandler} />
            <ProductListing searchCategory={searchInput} />
            <BottomNav/>
            {props.errorReducer.error && <ErrorModal/>}
        </>
    )
}
const mapStateToProps=(state)=>{
    return state;
}
const ShopContainer=connect(mapStateToProps)(Shop);
export default ShopContainer;