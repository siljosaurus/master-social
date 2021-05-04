import './App.css'
import './components/countdown'
import Countdown from './components/countdown'
import Info from './components/info'

const App = () => {
  return(
    <div className="app" >
      <div>
        <h1 style={{color: "rgba(var(--sf-blue), 1)"}}> master design social club</h1>
        <p>Velkommen til dette eksperimentelle digitale området rettet mot masterstudenter på 4. året design på ifi.</p>
        <div>
          <a href={"https://discord.gg/nANT4ZTW"}><i className="fab fa-discord"></i></a>
          <a href={"https://www.facebook.com/groups/1072004702847732"}><i className="fab fa-facebook-f"></i></a>
          <p>Bli med på discord eller facebook gruppa; MASTER DESIGN IFI</p>
        </div>


        <br/>
        
        <Info />
        <br/>
        <br/>
        <br/>
      </div>
      <Countdown />
    </div>
  )
}

export default App;