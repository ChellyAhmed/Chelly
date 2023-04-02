import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/About",
    element: <Home />,
  },
]);

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const newPage = (page) => {
    setSelectedPage(page);
  }
  return (
    <>
    <Navbar selectedPage={selectedPage} newPage={newPage}/>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
