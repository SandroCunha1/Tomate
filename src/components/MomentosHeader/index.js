import './MomentosHeader.css'


const MomentosHeader = (props) => {
    return (
        <section className='moments-header'>
          <h2>Momentos<span></span></h2>
          <button onClick={props.showForm}>Adicionar Momento</button>
        </section>
    )
}
export default MomentosHeader