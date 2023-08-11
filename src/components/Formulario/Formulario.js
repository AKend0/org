import "./Formulario.css"
import CampoTexto from "../CampoTexto"
const Formulario = () => {
   return (
      <section className="Formulario">
         <form>
            <h2>Rellena el Formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" />
            <CampoTexto titulo="Foto"
            placeholder="Ingresar enlace de Foto" />
         </form>
      </section>
   )
}
export default Formulario