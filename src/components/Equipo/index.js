import Colaborador from "../Colaborador";
import "./equipo.css"
const Equipo = (props)=>{
    //destructuracion
    const{colorPrimario,colorSecundario ,titulo} = props.datos
    const{colaboradores}=props

    //manera de como estilizar los props
    const obj={backgroundColor: colorSecundario}
    const estiloTitulo={borderColor:colorPrimario}
    //hacer que solo muestre los equipos que tengan colaboradores
    return <>
    {   colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index)=><Colaborador 
                    dato={colaborador} key={index} 
                    colorPrimario={colorPrimario}/>)
                }
            </div>
        </section>
    }
    </>
    
};

export default Equipo;