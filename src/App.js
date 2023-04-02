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
  console.log("Hello World!")
  return (
    <>
    <Navbar/>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
