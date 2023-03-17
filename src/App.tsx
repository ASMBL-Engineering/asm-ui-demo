import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import './App.scss';
import Core from './pages/Core';
import Blueprint from './pages/Blueprint';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" Component={Core} />
          <Route path="/blueprint" Component={Blueprint} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
