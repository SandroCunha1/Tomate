import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
   return (
    <div>
        <label>{props.label}</label>
        <select required={props.obrigatorio} onChange={evento => props.changed(evento.target.value)} value={props.value}>
            <option ></option>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
   )
}

export default ListaSuspensa