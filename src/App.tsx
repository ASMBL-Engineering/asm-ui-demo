import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import './App.scss';
import Core from './pages/Core';
import Blueprint from './pages/Blueprint';
import Hero from './Hero';
import { useEffect, useState } from 'react';

function App() {
  const [stylePath, setStylePath] = useState("./node_modules/@assemble-inc/base-ui/dist/style.css");

  const handleButtonClick = (style: string) => {
    setStylePath(style);
  }

  useEffect(() => {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = stylePath;

    head.appendChild(link);

    return () => { head.removeChild(link); }

  }, [stylePath]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header changeStyles={handleButtonClick} />
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
