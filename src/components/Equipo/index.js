import Colaborador from "../Colaborador";
import "./equipo.css"
const Equipo = (props)=>{
    //destructuracion
    const{colorPrimario,colorSecundario ,titulo} = props.datos
    return (
        <section className="equipo" style={{backgroundColor: colorSecundario}}>
            <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
            <div className="colaboradores">
                <Colaborador/>
                <Colaborador/>
                <Colaborador/>
                <Colaborador/>
            </div>
        </section>
    );
};

export default Equipo;