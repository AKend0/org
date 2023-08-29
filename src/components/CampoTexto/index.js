
import "./Campotexto.css"
const CampoTexto =(props)=>{
    const placeholdermodificado = `${props.placeholder}...`
    const manejarCambio= (evento)=>{
        props.actualizarValor(evento.target.value)
    }
    return(
        <div className="campo-texto">
            <label>{props.titulo} </label>
            <input 
                placeholder={placeholdermodificado } 
                required={props.required} 
                value={props.valor}
                onChange ={manejarCambio}
            />

        </div>
    )
}
export default CampoTexto