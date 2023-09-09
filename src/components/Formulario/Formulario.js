import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import { v4 as uuid } from 'uuid';
import { useState } from "react"
const Formulario = (props) => {

   const [nombre, actualizarNombre] = useState("");
   const [puesto, actualizarPuesto] = useState("");
   const [foto, actualizarFoto] = useState("");
   const [equipo, actualizarEquipo] = useState("");
   const [titulo, actualizarTitulo] = useState("");
   const [color, actualizarColor] = useState("");

   //evitando usar muchos puntos se llama de esa manera para solo colocar "registrar colaborador" desde App.js
   const {registrarColaborador,crearEquipo}=props;

   const manejarEnvio=(event)=>{
      event.preventDefault(); //evita recargar la pagina
      //console.log("manejar envio")
      let datosAEnviar={
         id:uuid(),
         nombre: nombre,
         puesto: puesto,
         foto: foto,
         equipo: equipo
      }
      
      //Enviara a app.js los datos del arreglo "datosAEnviar"
      registrarColaborador(datosAEnviar)
   }

   const manejarNuevoEquipo = (event) => {
      event.preventDefault()
      crearEquipo({ titulo, colorPrimario: color })
  }

   return (
      <section className="Formulario">
         <form onSubmit={manejarEnvio}>
            <h2>Rellena el Formulario para crear el colaborador.</h2>
            <Campo 
               titulo="Nombre" 
               placeholder="Ingresar Nombre" 
               required 
               valor={nombre} 
               actualizarValor={actualizarNombre}
            />

            <Campo
               titulo="Puesto" 
               placeholder="Ingresar Puesto" 
               required 
               valor={puesto} 
               actualizarValor={actualizarPuesto}
            />

            <Campo
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
         <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el Formulario para crear el equipo.</h2>
            <Campo
               titulo="Titulo" 
               placeholder="Ingresar Nombre" 
               required 
               valor={titulo} 
               actualizarValor={actualizarTitulo}
            />

            <Campo
               titulo="Color" 
               placeholder="Ingresar color en Hexagesimal" 
               required 
               valor={color} 
               actualizarValor={actualizarColor}
               type="color"
            />
              <Boton>
               Registrar equipo
            </Boton>
         </form>

      </section>
   )
}
export default Formulario