import './App.css'
import './components/countdown'
import Countdown from './components/countdown'
import Breakfast from './components/breakfast'

const App = () => {
  return(
    <div className="app" >
      <div>
        <h1 style={{color: "rgba(var(--sf-blue), 1)"}}> ifi design social club</h1>
        <p>Velkommen til dette eksperimentelle digitale området rettet mot masterstudenter på 4. året design på ifi.</p>
        <Breakfast />
      </div>
      <Countdown />
    </div>
  )
}

export default App;