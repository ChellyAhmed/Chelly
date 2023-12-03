import './styles/dist/light-app.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from './screens/About';
import { createContext, useState } from 'react';
import Portfolio from './screens/Portfolio';
import Contact from './screens/Contact';

export const SelectedPageContext = createContext();
function App() {
  const [selectedPage, setSelectedPage] = useState("");
  return (
    <>
      <SelectedPageContext.Provider value={[selectedPage, setSelectedPage]}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} errorElement={<h1>Error</h1>} />
            <Route path="/about" element={<About />} errorElement={<h1>Error</h1>} />
            <Route path="/portfolio" element={<Portfolio />} errorElement={<h1>Error</h1>} />
            <Route path="/contact" element={<Contact />} errorElement={<h1>Error</h1>} />
          </Routes>
        </BrowserRouter>
      </SelectedPageContext.Provider>
    </>
  );
}

export default App
