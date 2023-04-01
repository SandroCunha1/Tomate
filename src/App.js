import React from 'react'
import { useState } from 'react';
import AdicionarTipo from './components/AdicionarTipo';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Momento from './components/Momentos';
import MomentosHeader from './components/MomentosHeader';



function App() {


const timesLocal = JSON.parse(localStorage.getItem("itens")) || []
const momentsLocal = JSON.parse(localStorage.getItem("momentsI")) || []

  const [times, setTimes] = useState(timesLocal)
//

  const [moments, setMoments] = useState(momentsLocal)


  const addNewMoment = (moment) => {
    console.log(moment)
    setMoments([...moments, moment])
    momentsLocal.push(moment)
    localStorage.setItem("momentsI", JSON.stringify(momentsLocal)) 
  }

  const addNewTime = (time) => {
    console.log(time)
    setTimes([...times, time])
    timesLocal.push(time)
    localStorage.setItem("itens", JSON.stringify(timesLocal)) 
  }

  function deletCard(id, index){
    
    console.log(id, index)
    setMoments(moments.filter(moment => moment.nome !== id))
    const deleted = momentsLocal.filter(moment => moment.nome !== id)
    localStorage.setItem("momentsI", JSON.stringify(deleted)) 
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
        if(time.nome=== nome) {
            time.corPrimaria = cor;
        }
        return time;
    }))};
  

  const [display, setDisplay] = useState("none")
  const [displayCreater, setDisplayCreater] = useState("none")

  function showForm(){
    display === "none" ? setDisplay("") : setDisplay("none")
    displayCreater === "none" ? setDisplayCreater("none") : setDisplayCreater("none")
  }

  function CreateMoment(){
    display === "none" ? setDisplay("") : setDisplay("none")
    displayCreater === "none" ? setDisplayCreater("") : setDisplayCreater("none")
  }

  return (
    <div className="App">
      <Banner />  
      <Formulario display={display} times={times.map(time => time.nome)} momentRegister={moment => addNewMoment(moment)} openCreateMoment={CreateMoment}/>
       
      <AdicionarTipo display={displayCreater} closeCreateMoment={CreateMoment} addNew={time =>addNewTime(time)}/>
       
      <MomentosHeader showForm={showForm} />

      {times.map(time => 
      <Momento 
      key={time.nome} 
      nome={time.nome} 
      mudarCor={mudarCorDoTime}
      corPrimaria={time.corPrimaria} 
      momentos={moments.filter(moment => moment.momento === time.nome)}
      delet={deletCard}
      />)}
    
      <Footer/>
    
    </div>
    
  );
}

export default App;
