import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar um momento</h2>
                <CampoTexto label="Momento" placeholder="Qual foi o momento ?" />
                <CampoTexto label="Descrição" placeholder="De uma pequena descrição" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}
export default Formulario