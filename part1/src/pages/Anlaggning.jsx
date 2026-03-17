import React, { Component } from 'react';
import '../styles/Pages.css';
import '../styles/style.css';

import bankarta from '../assets/bankarta.png';
import forestVideo from '../assets/forest_video.mp4';

class Anlaggning extends Component {
  render() {
    return (
        <main className="subpage-container">
            <h1 className="page-title">ANLÄGGNING</h1>

            <section className="info-card">
                <h2>RANGE</h2>
                <p>Utveckla din precision på vattenrangen genom att slå ut över Kalvtjärnen. Rangen har fem utslagsplatser och är öppen kl. 08.00 – 22.00.</p>
                
                <div className="payment-info">
                    <p><strong>Betalning av bollar:</strong></p>
                    <ol>
                        <li>Pollett (20 kr): Säljes på COOP (betalning via Swish: <em>123 459 63 59</em>).</li>
                        <li>Mynt (10 kr): Halv hink, betalas direkt i automaten.</li>
                    </ol>
                    <p className="rules">Regler: Håll bollarna inom markerad läns och välj klubba efter tillgängligt avstånd.</p>
                </div>
            </section>

            <section className="info-card">
                <h2>BANAN</h2>
                <div className="card-content">
                    <p>Banan består av 18 hål (9-hålsslinga) med flera tee-alternativ i en kuperad terräng. Omgiven av öppna fält och två tjärnar karaktäriseras banan av sina tekniska par 3-hål och lättillgängliga par 4-hål</p>
                    <h3>18-hålsbanan</h3>
                </div>
                <div className="image-container">
                    <img src={bankarta} alt="Banskiss över Gunnarns Golfbana" className="course-map large-map" />
                </div>
            </section>

            <section className="info-card">
                <div className="card-content">
                    <h2>OMGIVNING</h2>
                    <p>Njut av en flygtur över vår vackra tjärn.</p>
                </div>
                <video controls>
                    <source src={forestVideo} type="video/mp4" />
                </video>
            </section>
      </main>
    );
  }
}

export default Anlaggning;