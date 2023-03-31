import './AdicionarTipo.css'
import { useState } from 'react'
import { HiBackspace } from 'react-icons/hi'
import CampoTexto from '../CampoTexto'

const AdicionarTipo = (props) => {

    const [nome, setNome] = useState("")
    const [color, setColor] = useState(props.corPrimaria)

    function colorChanger(e){
            setColor(e.target.value)
    }

    return(
    <section className='formCreat' style={{display:props.display}}>
        <form>
            
        <div> <HiBackspace size={50} color="#c31432" cursor="pointer" onClick={props.backForm}/> </div>
        
        <CampoTexto
            obrigatorio={true}
            label="Tipo"
            placeholder="Em casa, Shoppin, Viagem, etc..."
            value={nome}
            changed={valor => setNome(valor)}
        />

      <input type='color' className='colorPickerCreater' onChange={colorChanger} value={color}></input>

        </form>
    </section>

    )


}

export default AdicionarTipo
