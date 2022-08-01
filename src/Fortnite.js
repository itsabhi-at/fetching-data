import React from 'react'
import ForniteSingle from './ForniteSingle'

function Fortnite({name , id , img}) {
  return (
    <div>
        <img src={img} alt="nothing" />
        <h2>{name}</h2>
       <h1>{id}</h1>
    </div>
  )
}

export default Fortnite