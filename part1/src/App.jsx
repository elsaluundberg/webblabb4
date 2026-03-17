import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import MyHomePage from './pages/MyHomePage';
import Spela from './pages/SpelaHosOss';
import Anlaggning from './pages/Anlaggning';
import Verksamhet from './pages/Verksamhet';
import Medlem from './pages/Medlem';
import OmOss from './pages/OmOss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main> {/* Det är bra att ha en main-tagg runt dina sidor */}
          <Routes>
            <Route path="/" element={<MyHomePage />} />
            <Route path="/spela" element={<Spela />} />
            <Route path="/anlaggning" element={<Anlaggning />} />
            <Route path="/verksamhet" element={<Verksamhet />} />
            <Route path="/medlem" element={<Medlem />} />
            <Route path="/om-oss" element={<OmOss />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;