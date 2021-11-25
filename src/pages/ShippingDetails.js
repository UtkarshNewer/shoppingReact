import React from 'react'
import BottomNav from '../components/BottomNav'
import PaymentNav from '../components/PaymentNav'
import NavigationBar from "../components/NavigationBar"
import { useLocation } from 'react-router'
import ShippingForm from '../components/ShippingForm'
export default function ShippingDetails() {
    const location=useLocation();
    console.log(location.state);
    return (
        <>
            <NavigationBar/>
            <PaymentNav/>
            <ShippingForm orderDetails={location.state}/>
            <BottomNav/>
        </>
    )
}
