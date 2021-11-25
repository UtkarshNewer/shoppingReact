import React from 'react'
import ShippingFormDetails from './ShippingFormDetails'
// import SummaryShipping from './SummaryShipping'
// import Summary from '../components/Summary'
export default function ShippingForm(props) {
    // const [shippingCost,setShippingCost]=useState('');
    // const getShippingCost=(cost)=>{
    //     setShippingCost(cost);
    // }
    return (
        <div >      
                <ShippingFormDetails orderDetails={props.orderDetails} />
        </div>
    )
}
