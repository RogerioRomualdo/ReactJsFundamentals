import React from 'react'

export default props => {

    function acao() {
        props.onClick(Math.random(), "Valor Gerado")
    }

    return(
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    )
}