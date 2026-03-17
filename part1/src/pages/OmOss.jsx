import React, { Component } from 'react';
import '../styles/Pages.css';
import '../styles/style.css';

import klubbenBild from '../assets/klubben-bild.png';

class OmOss extends Component {
    render() {
        return (
            <main className="subpage-container">
                <h1 className="page-title">OM OSS</h1>

                <section className="info-card flex-row">
                    <div className="card-image-large">
                        {/* Bilden är nu korrekt självstängd */}
                        <img src={klubbenBild} alt="Golfspelare på Gunnarns GK" />
                    </div>
                    <div className="card-text">
                        <h2>GUNNARNS GOLFKLUBB</h2>
                        <p>Gunnarns Golfklubb bildades den 5 juli 2001 och driver en 9-håls golfbana som är upplagd som en 9/18-slinga med flera tee-alternativ för varierad och trivsam golf i ett naturnära landskap.</p>
                        <p>Samtliga hål blev spelklara 2007. Klubben erbjuder möjlighet till motion, rekreation och gemenskap för medlemmar, besökare och företag, och är en aktiv del av kommunen samt en attraktion i Gunnarn. 2023 hade klubben cirka 110 medlemmar.</p>
                    </div>
                </section>

                <section className="info-card">
                    <h2>KONTAKTPERSONER</h2>
                    <div className="contact-grid">
                        <div className="contact-item">
                            {/* Alla <br /> är nu korrekt stängda för JSX */}
                            <p><strong>Erik Brandum ordf.</strong><br />Gunnarnvägen 1<br />123 45 Gunnarn<br />Tel: <em>070-123 45 67</em><br />Mail: <a href="mailto:gunnarn@gunnarn.com">gunnarn@gunnarn.com</a></p>
                        </div>
                        <div className="contact-item">
                            <p><strong>Åsa Holmgren Kassör</strong><br />Gunnarnvägen 1<br />123 45 Gunnarn<br />Tel: <em>070-123 45 67</em><br />Mail: <a href="mailto:gunnarn@gunnarn.com">gunnarn@gunnarn.com</a></p>
                        </div>
                        <div className="contact-item">
                            <p><strong>Tävlingsverksamhet</strong><br />Martin Nyman<br />Gunnarnvägen 1<br />123 45 Gunnarn<br />Tel: <em>070-123 45 67</em><br />Mail: <a href="mailto:gunnarn@gunnarn.com">gunnarn@gunnarn.com</a></p>
                        </div>
                        <div className="contact-item">
                            <p><strong>Utbildningsfrågor</strong><br />Melker Johansson<br />Gunnarnvägen 1<br />123 45 Gunnarn<br />Tel: <em>070-123 45 67</em><br />Mail: <a href="mailto:gunnarn@gunnarn.com">gunnarn@gunnarn.com</a></p>
                        </div>
                    </div>
                </section>

                <section className="info-card flex-row">
                    <div className="policy-links">
                        <h2>LÄNKAR</h2>
                        <p><a href="http://www.storuman.se/">Storumans kommun</a></p>
                        <p><a href="http://www.tabussen.nu/">Länstrafiken</a></p>
                        <p><a href="http://www.hotelltoppen.se/">Boende</a></p>
                    </div>
                    <div className="policy-links">
                        <h2>POLICYS</h2>
                        <p><a href="#">Lokala regler</a></p>
                    </div>
                </section>
                
            </main>
        );
    }
}

export default OmOss;