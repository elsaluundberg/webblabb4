import React, { Component } from 'react';
import '../styles/Pages.css';
import '../styles/style.css';

class Medlem extends Component {
  render() {
    return (
      <main className="subpage-container"> {/* Lägg till klassen här eller i en div under */}
        <h1 className="page-title">MEDLEM</h1> {/* Valfritt: Använd din page-title klass */}
        
        <section className="info-card">
            <h2>MEDLEMSANSÖKAN</h2>
            <p>
            Som medlem får du spelrätt på vår bana, tillgång till MinGolf och medlemskap i Svenska Golfförbundet. 
            Medlemskapet ger dig också vår medlemsförsäkring (olycksfall och ansvar).
            </p>
            
            <p>
            För att ansöka om medlemskap fyller du i formuläret nedan med dina uppgifter. 
            Därefter skickar vi en faktura med inbetalningsuppgifter till den angivna mail-adressen. 
            När medlemsavgiften är betald kan du börja spela golf.
            </p>

            <p className="rules">
            Vid frågor hänvisar vi dig till vår kassör Åsa, telefon <em>070-123 45 67</em>.
            </p>

            <form className="contact-form">
                <div className="form-row">
                    <div className="form-group">
                    <label htmlFor="name">Namn</label>
                    <input type="text" id="name" name="name" placeholder="Ditt fullständiga namn" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">E-post</label>
                    <input type="email" id="email" name="email" placeholder="Din e-postadress" required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label htmlFor="pnr">Personnummer</label>
                    <input type="text" id="pnr" name="pnr" placeholder="10 siffror" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="tel">Telefonnummer</label>
                    <input type="tel" id="tel" name="tel" placeholder="Ditt telefonnummer" required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Adress</label>
                    <input type="text" id="address" name="address" placeholder="Gata, postnummer och ort" required />
                </div>

                <div className="form-group">
                    <label htmlFor="form">Medlemsform</label>
                    <input type="text" id="form" name="form" placeholder="Önskad medlemsform enligt tabell" required />
                </div>

                <button type="button" className="submit-button" onClick={this.showConfirmation}>
                    Ansök om medlemskap
                </button>
            </form>
        </section>

        <section className="info-card">
            <h2>MEDLEMSFORMER & AVGIFTER</h2>
            
            <table class="activity-table full-width">
                <thead>
                    <tr>
                        <th>Medlemsform</th>
                        <th>Åldersgrupp</th>
                        <th>Medlem kr/år</th>
                        <th>Spelavgift kr/år</th>
                        <th>Städavgift kr/år</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Yngre juniorer</td><td>15</td><td>350</td><td>Ingår</td><td></td></tr>
                    <tr><td>Junior lokal</td><td>15 - 21</td><td>600</td><td>Ingår</td><td>100</td></tr>
                    <tr><td>Junior distans</td><td>15 - 21</td><td>600</td><td></td><td></td></tr>
                    <tr><td>Senior fullvärdig</td><td>22 +</td><td>800</td><td>1250</td><td>300</td></tr>
                    <tr><td>Senior distans</td><td>22 +</td><td>800</td><td></td><td></td></tr>
                    <tr><td>Stödmedlem</td><td>Alla</td><td>300</td><td></td><td></td></tr>
                </tbody>
            </table>

            <div class="payment-info">
                <p>Seniora fullvärdiga medlemmar samt lokala juniorer 15–21 år betalar en städ- och aktivitetsavgift. Avgiften återbetalas efter deltagande i städdag eller motsvarande arbetsinsats.</p>
                <p>I medlemsavgiften ingår aktivt Golf-ID, tillgång till Min Golf samt medlemskap i SGF.</p>
            </div>
        </section>

      </main>
    );
  }
}

export default Medlem;