import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} errorElement={<h1>Error</h1>} />
      <Route path="/about" element={<Home />} errorElement={<h1>Error</h1>} />
      <Route path="/portfolio" element={<Home />} errorElement={<h1>Error</h1>} />
      <Route path="/contact" element={<Home />} errorElement={<h1>Error</h1>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
