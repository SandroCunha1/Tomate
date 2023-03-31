import React from 'react'
import { useState } from 'react';
import AdicionarTipo from './components/AdicionarTipo';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Momento from './components/Momentos';
import MomentosHeader from './components/MomentosHeader';

function App() {

  const times = [
    {
      nome:'Viagens',
      corPrimaria:'#f12711'
    },
    {
      nome:'Shopping',
      corPrimaria:'#f5af19'
    },
    {
      nome:'Social',
      corPrimaria:'#93291e'
    },
    {
      nome:'Em casa',
      corPrimaria:'#eaafc8'
    },
    {
      nome:'Restaurantes',
      corPrimaria:'#ff4b2b'
    },
    {
      nome:'Aniversários',
      corPrimaria:'#f27121'
    }
  ]
//
  const [moments, setMoments] = useState([])

  const addNewMoment = (moment) => {
    console.log(moment)
    setMoments([...moments, moment])
  }

  function deletCard(event){
    const botao = event.target 
    const pai = botao.parentNode
    console.log(pai)
  }

  const [display, setDisplay] = useState("none")
  const [displayCreater, setDisplayCreater] = useState("none")

  function showForm(){
    display === "none" ? setDisplay("") : setDisplay("none")
    displayCreater === "none" ? setDisplayCreater("none") : setDisplayCreater("none")
  }

  function openCreateMoment(){
    display === "none" ? setDisplay("") : setDisplay("none")
    displayCreater === "none" ? setDisplayCreater("") : setDisplayCreater("none")
  }

  return (
    <div className="App">
      <Banner />  
      <Formulario display={display} times={times.map(time => time.nome)}momentRegister={moment => addNewMoment(moment)} openCreateMoment={openCreateMoment}/>
       
      <AdicionarTipo display={displayCreater}/>
       
      <MomentosHeader showForm={showForm}/>
      {times.map(time => 
      <Momento 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      momentos={moments.filter(moment => moment.momento === time.nome)}
      delet={deletCard}
      />)}
    
      <Footer/>
    
    </div>
    
  );
}

export default App;
