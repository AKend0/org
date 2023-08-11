import "./Formulario.css"
import CampoTexto from "../CampoTexto"
const Formulario = () => {
   return (
      <section className="Formulario">
         <form>
            <h2>Rellena el Formulario para crear el colaborador.</h2>
            <CampoTexto />
            <CampoTexto />
            <CampoTexto />
         </form>
      </section>
   )
}
export default Formulario