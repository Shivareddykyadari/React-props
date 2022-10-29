import React from 'react'


const Welcome=(props)=>{
    return(
        <div>
            <h1>Welcome {props.name} A.k.a {props.heroName}</h1>
        </div>
    )
}

export default Welcome;