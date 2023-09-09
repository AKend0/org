
import "./Campo.css"
const Campo =(props)=>{
    const placeholdermodificado = `${props.placeholder}...`

    //Destructuracion
    const { type="text" }=props
    console.log(type)

    const manejarCambio= (evento)=>{
        props.actualizarValor(evento.target.value)
        
    }
    return(
        <div className={`campo campo-${type}`}>
            <label>{props.titulo} </label>
            <input 
                placeholder={placeholdermodificado } 
                required={props.required} 
                value={props.valor}
                onChange ={manejarCambio}
                type={type}
            />

        </div>
    )
}
export default Campo