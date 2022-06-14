const impura = () => new Date().toDateString()

console.log(impura())

//funcion pura  nunca cambia su valor  de retorno 
const MiComponente = ({miProp}) => {
  return (
    <div>
      nombre:{miProp}
    </div>
  )
}
 const App = () =>{
    return (
      <MiComponente miProp={"lalalaala"}/>
    )
  }


  import React, {useState} from 'react'
  import StateComponent from './useState'
  //reglas de los hooks:
  //no se llaman en loops,ni condiciones, ni while ni nada 
  
  //siempre en el nivel mas alto del componente 
  // solo se llama  en 2 partes :
  // componentes de react
  //custom hooks
  // cuando creemos un  custom hooks  siempre tiene  que comemnzar con use*
  class  App extends Component {
      state = {
         contador: 0
     }
    incrementar = () => {
         this.setState ({contador:this.state.contador + 1 })
     }
     render() {
         return (
             <div>
                contador : {this.state.contador}
                <button onClick={this.incrementar}>
                   incrementar
               </button>         </div>
       )
      }
      }
      const useContador = (inicial) => {
      const [contador, setContador] = useState(inicial)
       const incrementar = () =>{
           setContador(contador + 1)
       }
      return [ contador, incrementar]
      }
      const App = () => {
       const [ contador, incrementar] = useContador(0)
      return (
          <StateComponent />
      )
            return (
             <div>
                 Contador:{contador}
                <button onClick={incrementar}>  
               incrementar
               </button> 
           </div>
          )
  }
  export default App
  
