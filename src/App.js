import './App.css'
import './components/countdown'
import Countdown from './components/countdown'
import Dos from './articles/dos'
import Uno from './articles/uno'
import Tres from './articles/tres'



const App = () => {
  return(
    <div className="app" >
      <div>
        <h1 style={{color: "rgba(var(--sf-blue), 1)"}}> master design social club</h1>
        <p>Velkommen til dette eksperimentelle digitale området rettet mot masterstudenter på 4. og 5. året design på ifi.</p>
        <div>
          <a href={"https://discord.gg/k9nTTMaF"}><i className="fab fa-discord"></i></a>
          <a href={"https://www.facebook.com/groups/1072004702847732"}><i className="fab fa-facebook-f"></i></a>
          <a href={"https://2i.fi/"}><i class="fas fa-info-circle"></i></a>
          <p>Bli med på discord og i facebook gruppa; MASTER DESIGN IFI. Er du ny til ifi? Sjekk ut info-ikonet som lenker til en samleside over praktiske hurtiglenker relatert til ifi-studielivet.</p>
        </div>
        <br/>
        <Tres />
        <br/>
        <Dos/>
        <br/>
        
        <Uno />
        <br/>
        <br/>
        <br/>
      </div>
      <Countdown />
    </div>
  )
}

export default App;