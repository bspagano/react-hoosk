import React, { useState, useEffect } from "react"
import { Component } from "react/cjs/react.production.min"
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
     const incrementar = () => {
        setContador(contador + 1)
    }
    return [contador, incrementar]
}
// const Interval = ({contador}) =>{
//     useEffect(() => {
//         const i = setInterval(()=> console.log(contador), 1000) 
//        return () => clearInterval (i)
//     },[contador])
//     return(
//         <p>Intervalo</p>
//     )
// }
class Interval extends Component{
 intervalo = ""
componentDidMount() {
this.intervalo = setInterval(()=> console.log(this.props.contador),1000)
 
 }
 componentWillUnmount() {
 clearInterval(this.intervalo)
 }

  render() {
      return (
        <p>Intervalo</p>
      )
  }
         


}



const App = () => {
     const [ contador, incrementar] = useContador(0)
     useEffect(() => {
        if(contador)
            document.title = 'El contador es: '+ contador
     },[contador])
     return (
           <div>
                Contador:{contador}
                <button onClick={incrementar}>  
                    incrementar
                
                </button> 
                <Interval contador={contador}/>
            </div>
       )
     }

export default useState