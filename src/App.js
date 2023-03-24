import React from 'react'
import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Momento from './components/Momentos';

function App() {

  const times = [
    {
      nome:'Viagens',
      corPrimaria:'#f12711',
      corSecundaria:'#f127117e',
    },
    {
      nome:'Shopping',
      corPrimaria:'#f5af19',
      corSecundaria:'#f5af197e',
    },
    {
      nome:'Social',
      corPrimaria:'#93291e',
      corSecundaria:'#ed213a7e  ',
    },
    {
      nome:'Em casa',
      corPrimaria:'#eaafc8',
      corSecundaria:'#654ea37e',
    },
    {
      nome:'Restaurantes',
      corPrimaria:'#ff4b2b',
      corSecundaria:'#ff4b2b7e',
    },
    {
      nome:'Aniversários',
      corPrimaria:'#f27121',
      corSecundaria:'#e940577e',
    }
  ]
//
  const [moments, setMoments] = useState([])

  const addNewMoment = (moment) => {
    console.log(moment)
    setMoments([...moments, moment])
  }
  return (
    <div className="App">
      <Banner />  
      <Formulario times={times.map(time => time.nome)}momentRegister={moment => addNewMoment(moment)}/>
      
      {times.map(time => 
      <Momento key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      momentos={moments.filter(moment => moment.momento == time.nome)}
      />)}
    
    </div>
    
  );
}

export default App;
