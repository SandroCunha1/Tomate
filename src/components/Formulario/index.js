import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Shopping',
        'Viagens',
        'Social',
        'Em casa',
        'Restaurantes',
        'Aniversários'
    ]
    
    const [nome, setNome] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [momento, setMomento] = useState("")

   //Ao clicar em submit:
    const toSave = (e) => {
        e.preventDefault()
        console.log('Form foi submetido =>', nome, desc, img)
    }

    return (
        <section className='formulario'>
            <form onSubmit={toSave}>

                <h2>Preencha os dados para criar um momento</h2>

                <CampoTexto 
                obrigatorio={true} 
                label="Momento" 
                placeholder="Qual foi o momento ?" 
                value={nome}
                changed={valor => setNome(valor)}
                />

                <CampoTexto 
                obrigatorio={true}
                label="Descrição"
                placeholder="De uma pequena descrição" 
                value={desc}
                changed={valor => setDesc(valor)}
                />

                <CampoTexto 
                obrigatorio={true}
                label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                value={img}
                changed={valor => setImg(valor)}
                />

                <ListaSuspensa 
                obrigatorio={true} 
                label="Tipos de momentos"
                itens={times}
                value={momento}
                changed={valor => setMomento(valor)}
                />

                <Botao>Salvar momento</Botao>
            </form>
        </section>
    )
}
export default Formulario