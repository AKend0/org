import './App.css';
import Header from './components/header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import { useState } from 'react';
import Equipo from './components/Equipo';

function App() {

  //mostrar formulario parte 1
  const [mostrarFormulario, actualizarMostrar]=useState(false);

  //agregar colaborador paso1
  const [colaboradores, actualizarColaboradores] = useState([]);

  //Ternario --> condicion? seMuestra :  noSeMuestra
  //condicon && seMuestra

  //mostrar formulario parte 2 
  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador paso 2 
  const registrarColaborador=(colaborador)=>{
    console.log("Nuevo colaborador",colaborador);
    //Spread operator
    //cuando veamos "..." significa que esta copiando un valor , en este caso un arreglo "datos a evniar" de Formulario.js 
    actualizarColaboradores([...colaboradores, colaborador])

  }

  //lista de equipos
  const equipos =[
    {
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario:"#82CFFAc",
      colorSecundario:"#E8F8FF",
    },
    {
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2",
    },
    {
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8",
    },
    {
      titulo:"Ux y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5",
    },
    {
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9",
    },
    {
      titulo:"Innovacion y Gestion",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF",
    }   
  ]
  return (
    <div>
      <Header/>
      {/*mostrarFormulario ? <Formulario equipos={equipos.map((equipo)=>equipo.titulo)} /> : <></>*/}
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map ((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        />
        
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo)=><Equipo 
        key={equipo.titulo} 
        datos={equipo}

        //mostrar los colaboradores dentro de la pagina n su respectivo equipo
        //filtrando a los colaboradores para colocarlo con su respectivo equipo con filter
        colaboradores={colaboradores.filter(colaborador=>colaborador.equipo === equipo.titulo)}
        />
        )
      }
    </div>
  ); 
}

export default App;
