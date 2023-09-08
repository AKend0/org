import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';


function App() {

  //mostrar formulario parte 1
  const [mostrarFormulario, actualizarMostrar]=useState(false);

  //agregar colaborador paso1
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora"
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack"
    }
  ]);
  //lista de equipo
  const [equipos, actualizarEquipos] = useState([
      {
        id: uuid(),
        titulo:"Programacion",
        colorPrimario:"#57C278",
        colorSecundario:"#D9F7E9",
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario:"#82CFFA",
        colorSecundario:"#E8F8FF",
      },
      {
        id: uuid(),
        titulo:"Data Science",
        colorPrimario:"#A6D157",
        colorSecundario:"#F0F8E2",
      },
      {
        id: uuid(),
        titulo:"Devops",
        colorPrimario:"#E06B69",
        colorSecundario:"#FDE7E8",
      },
      {
        id: uuid(),
        titulo:"UX y Diseño",
        colorPrimario:"#DB6EBF",
        colorSecundario:"#FAE9F5",
      },
      {
        id: uuid(),
        titulo:"Movil",
        colorPrimario:"#FFBA05",
        colorSecundario:"#FFF5D9",
      },
      {
        id: uuid(),
        titulo:"Innovación y Gestión",
        colorPrimario:"#FF8A29",
        colorSecundario:"#FFEEDF",
      }   
    ]);
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
  //Eliminar Colaborador
  const eliminarColaborador= (id)=>{
    console.log("Eliminar Colaborador",id)
    const nuevosColaboradores=colaboradores.filter((colaborador)=>colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo

  const actualizarColor =(color, id)=>{
      console.log("Actualizar: " ,color ,id) ;
      const equiposActualizados = equipos.map((equipo)=>{
        if(equipo.id === id){
        equipo.colorPrimario = color
        }
        return equipo
      })
      actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }


  return (
    <div>
      <Header/>
      {/*mostrarFormulario ? <Formulario equipos={equipos.map((equipo)=>equipo.titulo)} /> : <></>*/}
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map ((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        
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
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor} 
        />
        )
      }
    </div>
  ); 
}

export default App;
