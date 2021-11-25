import React from 'react'
import BottomNav from '../components/BottomNav'
import NavigationBar from '../components/NavigationBar'
import ProductInfo from '../components/ProductInfo'


export default function ProductDescription(props) {

    return (
        <div>
            <NavigationBar/>
            <ProductInfo />
            <BottomNav/>
        </div>
    )
}
