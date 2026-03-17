import React from 'react';
import '../styles/Footer.css';

// Importera logotyperna från din assets-mapp
import logoGolf from '../assets/svenska-golfforbundet.png';
import logoAkeri from '../assets/holmner-akeri.png';
import logoUmluspen from '../assets/umluspen.png';
import logoSkog from '../assets/norra-skog.png';

function Footer() {
  return (
    <footer>
        <div className="footer-container">
            <div className="info-boxes">
                <div className="footer-box">
                    <h3>ÖPPETTIDER</h3>
                    <p>
                    Reception<br />
                    Vardagar 10:00 - 16:00<br />
                    Helger 12:00 - 15:00
                    </p>
                    <p>
                    Range<br />
                    08:00 - 22:00
                    </p>
                </div>

                <div className="footer-box">
                    <h3>KONTAKT</h3>
                    <p>
                    Mail<br />
                    gunnarngolf@gmail.com
                    </p>
                    <p>
                    Adress<br />
                    Gunnarns Golfklubb<br />
                    Gubbträskvägen 2B<br />
                    923 42 Gunnarn
                    </p>
                </div>
            </div>

            <div className="sponsors">
                <img src={logoGolf} alt="Svenska Golfförbundet" />
                <img src={logoAkeri} alt="Holmner Åkeri AB" />
                <img src={logoUmluspen} alt="Fastighets AB Umluspen" />
                <img src={logoSkog} alt="Norra Skog" />
            </div>
        </div>
    </footer>
  );
}

export default Footer;