import React from 'react';
import SummaryForm from "./SummaryForm";

function OrderSummary(props) {
    return (
        <div>
            {/*<h1>Order Summary</h1>*/}
            {/*<section className={'mt-3'}>*/}
            {/*    <h2>Scoops: $6.00</h2>*/}
            {/*    <li>3 Vanilla</li>*/}
            {/*</section>*/}
            {/*<section className={'mt-3'}>*/}
            {/*    <h2>Toppings: $4.50</h2>*/}
            {/*    <li>M&Ms</li>*/}
            {/*    <li>Hot fudge</li>*/}
            {/*    <li>Gummi bears</li>*/}

            {/*</section>*/}
            {/*<section className={'mt-3'}>*/}
            {/*    <h2>Total $10.50</h2>*/}
            {/*</section>*/}
            <SummaryForm />

        </div>
    );
}

export default OrderSummary;