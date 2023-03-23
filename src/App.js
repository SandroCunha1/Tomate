import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome:'Viagens',
      corPrimaria:'#f127117e',
      corSecundaria:'linear-gradient(to right, #f5af1970, #f127117e)',
    },
    {
      nome:'Shopping',
      corPrimaria:'#f127117e',
      corSecundaria:'linear-gradient(to right, #f5af1970, #f127117e)',
    },
    {
      nome:'Social',
      corPrimaria:'#f127117e',
      corSecundaria:'linear-gradient(to right, #f5af1970, #f127117e)',
    },
    {
      nome:'Em casa',
      corPrimaria:'#f127117e',
      corSecundaria:'linear-gradient(to right, #f5af1970, #f127117e)',
    },
    {
      nome:'Restaurantes',
      corPrimaria:'#f127117e',
      corSecundaria:'linear-gradient(to right, #f5af1970, #f127117e)',
    },
    {
      nome:'Aniversários',
      corPrimaria:'#f127117e',
      corSecundaria:'linear-gradient(to right, #f5af1970, #f127117e)',
    }
  ]

  const [moments, setMoments] = useState([])

  const addNewMoment = (moment) => {
    console.log(moment)
    setMoments([...moments, moment])
  }
  return (
    <div className="App">
      <Banner />  
      <Formulario momentRegister={moment => addNewMoment(moment)}/>
      <Time nome="Social"/>
      <Time nome="Shopping"/>
    </div>
    
  );
}

export default App;
