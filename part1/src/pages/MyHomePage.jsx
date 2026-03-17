import React, { Component } from 'react';
import '../styles/Pages.css';
import '../styles/style.css';

import heroVideo from '../assets/drone_video.mp4'; // Se till att namnet matchar din fil
import nyhet1 from '../assets/nyhet1.png';
import nyhet2 from '../assets/nyhet2.png';

class MyHomePage extends Component {
  render() {
    return (
      <main>
        <section className="hero">

            <video 
              src={heroVideo} 
              className="hero-video" // Vi behåller samma klass så din gamla CSS för storlek fortfarande funkar
              autoPlay 
              loop 
              muted 
              playsInline
            />

            <div className="hero-content">
              <h1>VÄLKOMMEN TILL GUNNARNS GOLFKLUBB</h1>
              <p className="hero-subtext">Det ska vara enkelt att spela golf.</p>
            </div>
        </section>

        <section className="noticeboard">
          <h2>ANSLAGSTAVLA</h2>
          
          <div className="info-card flex-row">
            <div className="card-image">
              <img src={nyhet1} alt="Nyhet 1" />
            </div>
            <div className = "card-content">
              <p>En varm sommardag samlades golfspelare från när och fjärran för årets stora golftävling. Solen glittrade i daggen på fairway och publiken följde varje slag med spänning.</p>
                      <p>Efter en jämn kamp avgjordes tävlingen på de sista hålen, där skicklighet och nerver sattes på prov. När dagen gick mot sitt slut firades både vinnare och gemenskap i den ljumma sommarkvällen.</p>
                <span className="date">2025-08-29</span>
            </div>
          </div>

          <div className="info-card flex-row">
            <div className="card-image">
              <img src={nyhet2} alt="Nyhet 2" />
            </div>
            <div className = "card-content">
              <p>På fairway förväntas ett kontrollerat och väl förberett slag. Att duffa bollen i detta läge är oftast ett resultat av bristande fokus eller otillräcklig grundteknik.</p>
                    <p>Med korrekt uppställning, stabil balans och ett lugnt tempo genom svingen minskar risken avsevärt för felträffar. Fairway ger de bästa förutsättningarna.</p>
              <span className="date">2025-08-29</span>
            </div>
          </div>

        </section>
      </main>
    );
  }
}

export default MyHomePage;