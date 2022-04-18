import "./App.css";
import Registration from "./functionalComponents/Registration";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Registration />
      </div>
    </Router>
  );
}
export default App;
