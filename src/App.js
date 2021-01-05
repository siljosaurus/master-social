import './App.css'
import './components/countdown'
import Countdown from './components/countdown'

const App = () => {
  return(
    <div className="app">
      <h1> social club for dezzignnn </h1>
      <p>Velkommen til dette eksperimentelle digitale social-club området for masterstudenter på design programmet.</p>
      <Countdown />
    </div>
  )
}

export default App;
