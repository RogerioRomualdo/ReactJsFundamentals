import React, {useState} from 'react'
import Sub from './sub';

export default props => {

    const [num, setNum] = useState(0)
    const [label, setLabel] = useState("Valor") 

    function onClick(valueNum, valueLabel){
        setNum(valueNum)
        setLabel(valueLabel)
    }

    return(
        <div>
            <h4>{label}: {num}</h4>
            <Sub onClick={onClick}></Sub>
        </div>
    )
}