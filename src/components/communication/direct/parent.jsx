import React from 'react'
import Child from './child';

export default props => {
    return(
        <div>
            <Child {...props}>Ana</Child>
            <Child surname={props.surname}>Bia</Child>
            <Child surname="Silva">Carlos</Child>
        </div>
    )
}