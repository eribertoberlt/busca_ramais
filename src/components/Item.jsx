import React from 'react'
import './Item.css'

var Item = (props)=>{
    return(     
        <>   
        <td>{props.ramal}</td>
        <td>{props.nome}</td>
        <td>{props.dpto}</td>
        <td>{props.entidade}</td>
        </>
    )
}

export default Item