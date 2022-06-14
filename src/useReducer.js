import React ,{ Component,useReducer, useState} from "react"

// state = {contador: 0}
//action ={type:type:string,payload: any  => significa que puede ser cualquier cosa }
//                acc, el y esto retorna el  nuevo  acc => acumulador 
const inicial = { contador : 0 }

const reducer = (state,action) => {
    switch(action.type) {
        case "incrementar":
            return{
                contador:state.contador + 1
            }
        case "decrementar":
            return{
                contador: state.contador - 1
            }
        case "set":
            return{
                contador:action.payload
            }
        default:
            return inicial
    }
}
const App = () => {
    const [state,dispatch] = useReducer(reducer,inicial)
    const [valor,setValor] = useState(0)

    return (
        <div>
            contador : {state.contador}
            <input value={valor} onChange={e => setValor(e.target.value)}/>
            <button onClick={() =>dispatch ({type:"incrementar"})}>
                Mas
            </button>

            <button onClick={() =>dispatch ({type:"decrementar"})}>
                Menos
            </button>
            <button onClick={() =>dispatch ({type:"set",payload: valor })}>
                Set
            </button>



        </div>
    )
}
 export default App
