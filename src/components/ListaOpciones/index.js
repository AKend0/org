import "./ListaOpciones.css"
const ListaOpciones=(props)=>{
    //metodo map para los arreglos-> arreglo.map((equipo, index)=>{
    //   return(<option></option>) 
    //})

    const manejarCambio =(e)=>{
        //console.log("Cambio", e.target.value);
        props.actualizarValor(e.target.value);
    }
    return(
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Selecciona un equipo</option>
                {props.equipos.map((equipo, index)=>{
                    return <option key={index}>{equipo}</option>
                })}
            </select>
        </div>
    )
}
export default ListaOpciones