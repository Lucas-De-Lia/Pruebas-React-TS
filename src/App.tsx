import { Counter } from "./components/Counter"
import { TimerPadre } from "./components/TimerPadre"
import { Usuario } from "./components/Usuario"
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <>
      <h1>React + TS</h1>
      <hr/>
      <Counter/>
      <Usuario/>
      <h2>useEffect - useRef</h2>
      <hr/>
      <TimerPadre/>
      <h2>useReducer</h2>
      <hr/>
      <ContadorRed/>
      <h2>Custom hooks</h2>
      <hr/>
      <Formulario/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default App
