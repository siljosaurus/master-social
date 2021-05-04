import './App.css'
import './components/countdown'
import Countdown from './components/countdown'
import Breakfast from './components/breakfast'
import Info from './components/info'

const App = () => {
  return(
    <div className="app" >
      <div>
        <h1 style={{color: "rgba(var(--sf-blue), 1)"}}> master design social club</h1>
        <p>Velkommen til dette eksperimentelle digitale området rettet mot masterstudenter på 4. året design på ifi.</p>
        
        <Info />
        <Breakfast />
      </div>
      <Countdown />
    </div>
  )
}

export default App;