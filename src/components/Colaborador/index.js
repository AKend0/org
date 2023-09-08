import "./colaborador.css"
import { CgCloseR } from "react-icons/cg"
const Colaborador = (props) =>{
    const{nombre,puesto,foto,equipo,id}=props.dato;
    //colocar color de fondo a colaborador por equipo parte 1 de Equipo.js
    const{colorPrimario, eliminarColaborador}=props;
    return(
        <div className="colaborador">
             <CgCloseR onClick={()=>eliminarColaborador(id)} className="eliminar"/>
            {/* //colocar color de fondo a colaborador por equipo parte 2 */}
            <div className="encabezado" style={{backgroundColor: colorPrimario}}>
                <img src={foto} alt={nombre}></img>
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
            </div>
        </div>
    )
}
export default Colaborador