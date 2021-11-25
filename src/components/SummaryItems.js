import React from 'react'

export default function SummaryItems(props) {
    return (
        <div className="row pb-1">
            <div className="col-md-4"><img className="w-md-100 w-100" src={props.item.image} alt="productImage"/></div>
            <div className="col-md-7">
                <h5>{props.item.title}</h5>
                <h6>${props.item.price}</h6>
                <p>size:{props.item.size}</p>
            </div>
        </div>
    )
}
