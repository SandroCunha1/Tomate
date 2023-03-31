import React from 'react'
import Card from '../Card';
import { useState } from 'react';
import './Momento.css'


const Momento = (props) => {

    
    const [color, setColor] = useState(props.corPrimaria)

    function colorChanger(e){
            setColor(e.target.value)
    }


    return(
    props.momentos.length > 0? 
    <section className='time' style={{ backgroundColor: `${color}7e` }}>
        <input type='color' className='colorPicker' onChange={colorChanger} value={color}></input>
    <h3 >{props.nome}<span style={{ borderColor: color}}></span></h3>
    
    <div className='cards'>
    {props.momentos.map( momento => 
    <Card 
    key={momento.nome}
    corFundo={color}
    nomeMomento={momento.nome} 
    descMomento={momento.desc}
    imgMomento={momento.img}
    delet={props.delet}
    />)}
    </div>
   </section>:
   <section></section>)
}

export default Momento;