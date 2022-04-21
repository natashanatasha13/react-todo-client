import "./App.css";
import MainRegister from "./functionalComponents/RegisterMain";
import Main from "./functionalComponents/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/log" element={<MainRegister />}></Route>

          <Route exact path="/todos" element={<Main />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
