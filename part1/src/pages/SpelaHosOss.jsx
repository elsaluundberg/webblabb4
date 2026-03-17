import React, { Component } from 'react';
import '../styles/Pages.css';
import '../styles/style.css';
import banaMiljo from '../assets/bana-miljo.png';

class SpelaHosOss extends Component {
  render() {
    return (
      <main className = "subpage-container">
        <h1 className="page-title">SPELA HOS OSS</h1>
        <section className="info-card flex-row">
            <div className="card-text">
                <h2>VAD KUL ATT DU VILL GOLFA HOS OSS!</h2>
                <p>På Gunnarns Golfbana behövs <strong>ingen tidsbokning</strong>. Du är välkommen att spela när banan är öppen och spelbar.</p>
                <p>Innan du går ut på banan ska greenfee betalas (se tabellen nedan för pris). Betalning sker via Swish till <em>1234596359</em> eller kontant enligt anvisning vid klubbhuset.</p>
                <p>Tag scorekort och notera radnummer från greenfeeboken på ditt scorekort. Lägg i kuvert och skriv namn och radnummer på kuvertet. Stoppa ned kuvertet i lådan på väggen vid serveringsdisk.</p>
            </div>
            <img src={banaMiljo} alt="Gunnarns Golfbana vy" className="card-image-side" />
        </section>

        <section className="info-card">
        <h2>GREENFEE</h2>
            <table className="activity-table full-width">
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>Dagsgreenfee</th>
                        <th>Veckogreenfee</th>
                        <th>Årsgreenfee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Senior medlem i annan GK</td><td>300 kr</td><td>700 kr</td><td>1 400 kr</td></tr>
                    <tr><td>Senior medlem i GunGK</td><td>180 kr</td><td>500 kr</td><td>750 kr</td></tr>
                    <tr><td>Junior 15-21 medlem i annan GK</td><td>100 kr</td><td>300 kr</td><td>400 kr</td></tr>
                    <tr><td>Junior 15-21 medlem i GunGK</td><td>Ingen avgift</td><td></td><td>Ingen avgift</td></tr>
                    <tr><td>Yngre junior -14 samtliga</td><td>Ingen avgift</td><td></td><td>Ingen avgift</td></tr>
                    <tr><td>Gäst</td><td>120 kr</td><td>500 kr</td><td>1500 kr</td></tr>
                </tbody>
            </table>
        </section>

      </main>
    );
  }
}

export default SpelaHosOss;