import "./Campotexto.css"
const CampoTexto =(props)=>{
    const placeholdermodificado = `${props.placeholder}...`
    return(
        <div className="campo-texto">
            <label>{props.titulo} </label>
            <input placeholder={placeholdermodificado } />

        </div>
    )
}
export default CampoTexto