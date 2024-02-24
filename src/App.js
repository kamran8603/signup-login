import "./App.css";
import Home from "./Home";

import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Setup from "./Setup";
import Signin from "./Signin";
import Signup from "./SignUp";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="Signin">Signin</Link>
      <Link to="Setup">Setup</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="SignUp" element={<Signup />} />
        <Route path="Setup" element={<Setup />} />
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
