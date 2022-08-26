// import logo from "./logo.svg";
import "./App.css";
import Header from "../src/Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Patient from "./Components/Vaccine/Patient/Patient";
import Administer from "./Components/Vaccine/Administer/Administer";
import Home from "./Components/Vaccine/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="text-center">
        <h1>Vaccination Schedule System</h1>
        <Header />
        <Routes>
          <Route path="/Patient" element={<Patient />} />
          <Route path="/Administrator" element={<Administer />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
