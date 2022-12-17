import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from "./components/Register.js";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <Register />
    </div>
  );
}

export default App;
