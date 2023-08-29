import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import { useState } from "react"
const Formulario = (props) => {

   const [nombre, actualizarNombre] = useState("");
   const [puesto, actualizarPuesto] = useState("");
   const [foto, actualizarFoto] = useState("");
   const [equipo, actualizarEquipo] = useState("");
   const {registrarColaborador}=props;
   const manejarEnvio=(event)=>{
      event.preventDefault(); //evita recargar la pagina
      //console.log("manejar envio")
      let datosAEnviar={
         nombre: nombre,
         puesto: puesto,
         foto: foto,
         equipo: equipo
      }
      registrarColaborador(datosAEnviar)
   }
   return (
      <section className="Formulario">
         <form onSubmit={manejarEnvio}>
            <h2>Rellena el Formulario para crear el colaborador.</h2>
            <CampoTexto 
               titulo="Nombre" 
               placeholder="Ingresar Nombre" 
               required 
               valor={nombre} 
               actualizarValor={actualizarNombre}
            />

            <CampoTexto 
               titulo="Puesto" 
               placeholder="Ingresar Puesto" 
               required 
               valor={puesto} 
               actualizarValor={actualizarPuesto}
            />

            <CampoTexto 
               titulo="Foto"
               placeholder="Ingresar enlace de Foto" 
               valor={foto} 
               actualizarValor={actualizarFoto}
            />
            <ListaOpciones
               valor={equipo}
               actualizarValor={actualizarEquipo}
               equipos={props.equipos}
             />
            <Boton>
               Crear
            </Boton>
         </form>
      </section>
   )
}
export default Formulario