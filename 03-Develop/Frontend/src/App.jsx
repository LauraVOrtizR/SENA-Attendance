import './App.css'
import { Button } from './components/ui/button/button'
import { Input } from './components/ui/input/input'
import {Select} from './components/ui/select/select'
import { SessionCard } from './layouts/sessionCard/sessionCard'

function App() {
  return (
    <SessionCard title="Iniciar Sesion" description="Gestiona tu asistencia de forma eficiente" text="Texto inferior de la tarjeta">
      <Button color={"green"} label="Este es un boton" />
    </SessionCard>

  )
}

export default App
