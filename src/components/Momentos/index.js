import React from 'react'
import Card from '../Card';
import './Momento.css'


const Momento = (props) => {

    
    // const [color, setColor] = useState(props.corPrimaria)

    // function colorChanger(e){
    // setColor(e.target.value)  
    // }
    // console.log(props.corPrimaria)


    return(

    props.momentos.length > 0 ? 
    <section className='time' style={{ backgroundColor: `${props.corPrimaria}7e` }}>
    <input type='color' style={{display:props.setColor}} className='colorPicker' onChange={e => props.mudarCor(e.target.value, props.nome)} value={props.corPrimaria}></input>

    <h3 >{props.nome}<span style={{ borderColor: props.corPrimaria}}></span></h3>
    
    <div className='cards'>
    {props.momentos.map( momento => 
    <Card 
    key={momento.nome}
    corFundo={props.corPrimaria}
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