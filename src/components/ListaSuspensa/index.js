import React from 'react'
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
   return (
    <div className='lista'>
        <div className='select'>
        <label>{props.label}</label>
        <select required={props.obrigatorio} onChange={evento => props.changed(evento.target.value)} value={props.value}>
            <option ></option>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
        </div>
        <button className='button' type='button' onClick={props.openCreateMoment}>+</button>
    </div>
   )
}

export default ListaSuspensa