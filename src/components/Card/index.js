import React from 'react'
import './Card.css'

const Card= (props) => {
        return(
            <div className='colaborador'>
                <div className='cabecalho'>
                    <img src={props.imgMomento} alt={props.nomeMomento}/>
                </div>             
                <div className='rodape'>
                    <h4>{props.nomeMomento}</h4>
                    <h5>{props.descMomento}</h5>
                </div>
            </div>
        )
}

export default Card;