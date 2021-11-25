import React from 'react'
import NavigationBar from '../components/NavigationBar'
import BottomNav from '../components/BottomNav'
import PaymentNav from '../components/PaymentNav'
import ShoppingDetails from './ShoppingDetails'
export default function Cart() {
    const current =window.location.href;
    console.log(current);
    return (
        <>
            <NavigationBar current={current} />
            <PaymentNav />
            <ShoppingDetails />
            <BottomNav/>
        </>
    )
}
