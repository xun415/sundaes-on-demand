import React from 'react';
import Options from "./Options";


function OrderEntry(props) {
    return (
        <div>
            <Options optionTypes={'scoops'} />
            <Options optionTypes={'toppings'} />
        </div>
    );
}

export default OrderEntry;