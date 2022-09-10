import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ScoopOption from "./ScoopOption"
import Row from 'react-bootstrap/Row'
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";


function Options({ optionTypes }) {
    const [ items, setItems ] = useState([])
    const [ error, setError ] = useState(false)


    // optionType is 'scoops' or 'toppings'
    useEffect(() => {
        try {
            axios.get(`http://localhost:3030/${optionTypes}`)
                .then(response => setItems(response.data))
                .catch(e => setError(true))
        } catch (e) {
            console.log(e)
        }

    }, [ optionTypes ])

    if (error) {
        return <AlertBanner />
    }

    const ItemComponent = optionTypes === 'scoops' ? ScoopOption : ToppingOption

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