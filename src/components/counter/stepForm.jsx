import React from 'react';


export default props =>{
    return(
        <div className="Counter">
            <label htmlFor="stepInput">Step </label>
            <input 
                id="stepInput"
                type="number"
                value={props.step} 
                onChange={(e) => props.onStepChange(+e.target.value)}
            />
        </div>   
    )
}