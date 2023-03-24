import React from 'react'
import Card from '../Card';
import './Momento.css'

const Momento = (props) => {
    return(
   <section className='time' style={{ backgroundColor: props.corSecundaria }}>
    <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
    <div className='cards'>
    {props.momentos.map( momento => 
    <Card 
    nomeMomento={momento.nome} 
    descMomento={momento.desc}
    imgMomento={momento.img}
    />)}
    </div>
   </section>)
}

export default Momento;