import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import './App.scss';
import Core from './pages/Core';
import Blueprint from './pages/Blueprint';
import Hero from './Hero';
import { useEffect, useState } from 'react';

function App() {
  const [stylePath, setStylePath] = useState("base");

  const handleButtonClick = (style: string) => {
    setStylePath(style);
  }

  const cleanStyles = (currentStyle: string) => {
    const currentStyleSheets = document.styleSheets;

    if (currentStyleSheets) {
      for (let i = 0; i <= currentStyleSheets.length; i++) {
        if (currentStyleSheets[i]) {
          if (!currentStyleSheets[i].href?.includes(currentStyle) && !currentStyleSheets[i].href?.includes('index')) {
            currentStyleSheets[i].disabled = true;
          } else {
            currentStyleSheets[i].disabled = false;
          }
        }
      }
    }
  }

  useEffect(() => {

    if (stylePath === 'base') {
      import(`./styles/base-ui.scss`);
    }

    if (stylePath === 'apple') {
      import(`./styles/apple-ui.scss`);
    }

    if (stylePath === 'asm') {
      import(`./styles/asm-ui.scss`);
    }

    cleanStyles(stylePath);

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
