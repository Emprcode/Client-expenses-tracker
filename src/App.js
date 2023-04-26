import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from "./components/Register.js";
import { Title } from "./components/Title";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Title />
      <Register />
      <ToastContainer/>
    </div>
  );
}

export default App;
