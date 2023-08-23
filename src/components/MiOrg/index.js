import { useState } from "react";
import "./MiOrg.css"
const MiOrg=(props)=>{
    //hooks
    //useState
    //const[nombreVariable, actualizarNombre]=useSate(true)
    console.log(props)
    // const[mostrar, actualizarMostrar]=useState(true)
    // const manejarClick=()=>{
    //     console.log("mostrar/ocultar" ,!mostrar);
    //     actualizarMostrar(!mostrar);
    //};
        return(
            <section className="orgSection">
                <h3 className="tittle">Mi organizacion</h3>
                <img src="/img/boton_add.png" alt="add" onClick={props.cambiarMostrar}/>
            </section>
        )
}

export default MiOrg