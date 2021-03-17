import React, {useState} from "react"

export default props =>{
    const [email, setEmail] = useState("Email")

    return (
        <>
            <h3>{email}</h3>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>
        </>
    )
}
