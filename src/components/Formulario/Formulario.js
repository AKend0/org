import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
const Formulario = () => {
   const manejarEnvio=(event)=>{
      event.preventDefault(); //evita recargar la pagina
      console.log("manejar envio",event)

   }
   return (
      <section className="Formulario">
         <form onSubmit={manejarEnvio}>
            <h2>Rellena el Formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required/>
            <CampoTexto titulo="Foto"
            placeholder="Ingresar enlace de Foto" />
            <ListaOpciones />
            <Boton>
               Crear
            </Boton>
         </form>
      </section>
   )
}
export default Formulario