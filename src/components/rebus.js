import React from 'react'
import { Link } from "react-router-dom"


const Rebus = () => {
    return(
        <div className="app">
            
            <Link   to="/"
                    className="fas fa-hand-point-left"
                    style={{fontSize: "2rem"}}>
            </Link>
            
            <br/> <br/> <br/>
            <h1>"OMVISNINGSCHALLENGE"</h1>
            <h2>Fra ca kl 11:30 til ca 14:00</h2>
            <h3>Okey, så i denne rebusen ønsker vi at dere konsekvent tar enten bilder eller filmer til hver challenge, slik at når tiden er ute vil dere ha enten en bildekollasj eller kortfilm å vise frem til resten av gruppa - og et koselig minne fra fadderuka  </h3>
            <h3>Dere står fritt til å løse challenges i hvilken rekkefølge dere vil, og så mange eller få dere klarer.</h3>
            <p>1. Finn lesesalen vår og vis deres beste lesesal pose.</p>
            <p>2. Finn og velg ut det sølv kunstverket dere liker best. Bonuspoeng om dere forklarer deres tolkning av verket.</p>
            <p>3. Chill litt i gresset sammen med en “Roberto” (robotgressklipper).</p>
            <p>4. Fashion show posering i catwalken!</p>
            <p>5. Pingvinposering ved Escape!</p>
            <p>6. Print ut et bilde av gruppa samlet rundt en printer.</p>
            <p>7. Vibe check på verandaen i 8!</p>
            <p>8. Finner dere frem til bordtennisbordet i Nemco bygget mon tro?</p>
            <p>9. Hva er gruppas favoritt børek på Dana? Bonuspoeng om dere får med pappa Dana på kamera.</p>
            <p>10. Klarer dere å gjenskape en meme fra @blindernmemes ?</p>
            <p>11. Vis oss deres tegneferdigheter og lag en visualisering som får frem hvordan dere tror det blir å skrive masteroppgave.</p>
            <p>12. Pek på bygningen hvor man kan både ruineres på Akademika og fikse seg studentkort.</p>
            <p>13. Hvor på Fredrikke drar studenter på fredager før de setter på gullrekka?</p>
            <p>14. Hvor lange steg tar dere i GS trappa?</p>
            <p>15.Hvis ifi-designeren var en stereotyp, vis oss hvordan stereotypen ville sett ut.</p>
        </div>
    )
}

export default Rebus;