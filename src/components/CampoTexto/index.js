import "./Campotexto.css"
const CampoTexto =(props)=>{
    console.log("Datos: ",props)
    const placeholdermodificado = `${props.placeholder}...`
    return(
        <div className="campo-texto">
            <label>{props.titulo} </label>
            <input placeholder={placeholdermodificado } required={props.required}/>

        </div>
    )
}
export default CampoTexto