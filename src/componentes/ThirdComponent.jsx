import React from 'react'

export const ThirdComponent = (props) => {
    console.log(props);
  return (
    <div>
        <h2>Comunicacion entre componentes</h2>
        <ul>
            <li>{ props.name}</li>
            <li>{ props.allergies }</li>
            <li>{props.card.name}</li>
        </ul>


    </div>
  )
}
// props = propiedades