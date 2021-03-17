import React, { useState } from 'react';

export default (props) => {

    const [num, setNum] = useState(Array(props.qtdNum).fill(0))

    function generateNewNumber(array){
        const newNumber = parseInt(Math.random() * (60 - 1) + 1)
        return array.includes(newNumber) 
            ?generateNewNumber(array)
            :newNumber
    }

    function generateNumbers(){
        const newArray = Array(props.qtdNum)
            .fill(0)
            .reduce(a => [...a, generateNewNumber(a)], [])  
            .sort((a, b) => a-b)
        setNum(newArray)
    }

    return (
        <div>
            <h3>Lottery</h3>
            <h4>{num.join(' ')}</h4>
            <button onClick={generateNumbers}>Generate Numbers</button>
        </div>
    )
}