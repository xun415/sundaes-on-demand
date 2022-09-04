import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ScoopOption from "./ScoopOption"
import Row from 'react-bootstrap/Row'


function Options({ optionTypes }) {
    const [ items, setItems ] = useState([])

    // optionType is 'scoops' or 'toppings'
    useEffect(() => {
        try {
            axios.get(`http://localhost:3030/scoops/${optionTypes}`)
                .then(response => setItems(response.data))
                .catch(e => console.log(e))
        } catch (e) {
            console.log(e)
        }

    }, [ optionTypes ])

    // TODO: replace 'null' with ToppingOption when available
    const ItemComponent = optionTypes === 'scoops' ? ScoopOption : null

    const optionItems = items.map(item => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}/>
    ))

    return (
        <Row>{optionItems}</Row>
    );
}

export default Options;