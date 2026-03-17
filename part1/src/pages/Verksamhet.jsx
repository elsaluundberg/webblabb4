import React, { Component } from 'react';
import '../styles/Pages.css';
import '../styles/style.css'; // Slutförde importen här

class Verksamhet extends Component {
  render() {
    return (
      <main className="subpage-container">
        <h1 className="page-title">VERKSAMHET</h1>

        <section id="tavlingar" className="info-card">
          <h2>TÄVLINGSANMÄLAN & AVGIFTER</h2>
          <p>
            Du anmäler dig i första hand via Min Golf på <a href="https://golf.se">golf.se</a>. 
            Vid behov av hjälp eller undantagsfall, kontakta Melker Johansson via mail, <em>gunnarn@gunnarn.com</em>.
          </p>
          
          <div className="table-row">
            <table className="activity-table">
              <caption><strong>Anmälningsavgifter</strong></caption>
              <tbody> {/* Lade till tbody */}
                <tr><td>9 hål (singel)</td><td>50 kr</td></tr>
                <tr><td>18 hål (singel)</td><td>100 kr</td></tr>
                <tr><td>27 hål (inkl. lunch)</td><td>350 kr</td></tr>
                <tr><td>Partävling</td><td>200 kr per par</td></tr>
              </tbody>
            </table>

            <table className="activity-table">
              <caption><strong>Tävlingsgreenfee (för gäster, exkl. startavgift)</strong></caption>
              <tbody> {/* Lade till tbody */}
                <tr><td>Senior</td><td>150 kr</td></tr>
                <tr><td>Junior (t.o.m 21 år)</td><td>Ingen avgift</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="payment-info">
            <p>Efteranmälan: Vid anmälan efter ordinarie tid tillkommer dubbel avgift. Sker senast 1 timme före start.</p>
            <p>Betalning: Swishas till <em>123 459 63 59</em>. Ange "Tävlingsavgift" och aktuell tävling i meddelandet.</p>
          </div>
        </section>

        <section id="stallplats" className="info-card">
          <h2>STÄLLPLATS HUSBIL & HUSVAGN</h2>
          <p>I anslutning till klubbhuset finns fyra elförsedda ställplatser för husbil och husvagn.</p>
          
          <table className="activity-table full-width">
            <thead> {/* Lade till thead för rubrikerna */}
              <tr>
                <th>Längd på vistelsen</th>
                <th>Ställplats pris</th>
                <th>Greenfeegäst / medlem</th>
              </tr>
            </thead>
            <tbody> {/* Lade till tbody för datan */}
              <tr><td>Dygn</td><td>200 kr</td><td>120 kr</td></tr>
              <tr><td>Vecka</td><td>1000 kr</td><td>500 kr</td></tr>
              <tr><td>Månad</td><td>2500 kr</td><td>1500 kr</td></tr>
            </tbody>
          </table>
        </section>
      </main>
    );
  }
}

export default Verksamhet;