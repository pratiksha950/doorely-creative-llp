import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AISolutions from './pages/AISolutions';
import FacialRecognition from './pages/FacialRecognition';
import Hardware from './pages/Hardware';
import Software from './pages/Software';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/facial-recognition" element={<FacialRecognition />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/software" element={<Software />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
