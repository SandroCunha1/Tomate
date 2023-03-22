import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (e) => {
      props.changed(e.target.value)
    } 

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto