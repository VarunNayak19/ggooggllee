
import './App.css';
import Footer from './components/footer/footer';
import Landing from './views/landing/landing';
import Results from './views/results/results';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
