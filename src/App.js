import './App.css';
import Header from './components/header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import { useState } from 'react';

function App() {
  const [mostrarFormulario, actualizarMostrar]=useState(true)
  //Ternario --> condicion? seMuestra :  noSeMuestra
  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div>
      <Header/>
      {mostrarFormulario ? <Formulario /> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  ); 
}

export default App;
