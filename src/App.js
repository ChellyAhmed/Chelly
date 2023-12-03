import React, { createContext, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import './styles/dist/light-theme.css';
import './styles/dist/dark-theme.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './screens/About';
import Portfolio from './screens/Portfolio';
import Contact from './screens/Contact';

export const SelectedPageContext = createContext();

function App() {
  const [selectedPage, setSelectedPage] = useState('');
  const prefersDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(prefersDarkTheme ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
      <div className ={theme+"-theme"}>
        <SelectedPageContext.Provider value={[selectedPage, setSelectedPage]}>
          <BrowserRouter>
            <Navbar
              toggleTheme={toggleTheme}
              theme={theme}
            />
            <Routes>
              <Route path="/" element={<Home />} errorElement={<h1>Error</h1>} />
              <Route path="/about" element={<About />} errorElement={<h1>Error</h1>} />
              <Route path="/portfolio" element={<Portfolio />} errorElement={<h1>Error</h1>} />
              <Route path="/contact" element={<Contact />} errorElement={<h1>Error</h1>} />
            </Routes>
          </BrowserRouter>
        </SelectedPageContext.Provider>
      </div>
  );
}

export default App;
