
import './AdicionarTipo.css'
import { useState } from 'react'
import { HiBackspace } from 'react-icons/hi'
import CampoTexto from '../CampoTexto'

const AdicionarTipo = (props) => {

    const [nome, setNome] = useState("")
    const [cor, setCor] = useState("#000000")

    function colorChanger(e){
        setCor(e.target.value)
    }
    

    const saveTime = (e) => {
        e.preventDefault()
        props.addNew({
            nome:nome,
            corPrimaria:cor
        })
        setNome("")
        setCor("#000000")
    }

    return(
    <section className='formCreat' style={{display:props.display}}>

        <form onSubmit={saveTime}>
            
            <div>
                <HiBackspace size={50} color="#c31432" cursor="pointer" onClick={props.closeCreateMoment}/>
            </div>
        
            <CampoTexto
                obrigatorio={true}
                label="Tipo"
                placeholder="Em casa, Shoppin, Viagem, etc..."
                value={nome}
                changed={valor => setNome(valor)}
            />

            <input type='color' className='color-picker' onChange={colorChanger} value={cor} />

            {/* <Momento
                nome={nome} 
                corPrimaria={cor}
                setColor={"none"}
                momentos={[{nome:'Momento', desc: 'Um momento muito especial', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZF6vbfNv2hYKarlpyxvzWvc3_lki3mzA6giI0biOpw&s' }]}
            /> */}

            <button className='save-moment'>Salvar</button>
        </form>
    </section>
    )
}

export default AdicionarTipo
