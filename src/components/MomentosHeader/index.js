import './MomentosHeader.css'


const MomentosHeader = (props) => {
    return (
        <section className='moments-header'>
          <h2>Momentos<span></span></h2>
          <div><button onClick={props.showForm}>Adicionar Momento</button></div>
        </section>
    )
}
export default MomentosHeader