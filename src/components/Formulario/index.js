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
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar um momento</h2>
                <CampoTexto label="Momento" placeholder="Qual foi o momento ?" />
                <CampoTexto label="Descrição" placeholder="De uma pequena descrição" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Tipos de momentos"itens={times}/>
                <Botao>Salvar momento</Botao>
            </form>
        </section>
    )
}
export default Formulario