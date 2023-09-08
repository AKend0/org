import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';
import "./equipo.css"
const Equipo = (props)=>{
    //destructuracion
    const{colorPrimario,titulo,id} = props.datos
    const{colaboradores, eliminarColaborador,actualizarColor}=props

    //manera de como estilizar los props
    const obj={backgroundColor: hexToRgba(colorPrimario ,0.6)}
    const estiloTitulo={borderColor:colorPrimario}
    //hacer que solo muestre los equipos que tengan colaboradores
    return <>
    {   colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(evento) =>{
                    actualizarColor(evento.target.value,id);
                }}
            />

            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index)=><Colaborador 
                    dato={colaborador} key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    />)
                }
            </div>
        </section>
    }
    </>
    
};

export default Equipo;