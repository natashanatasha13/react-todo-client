import "./App.css";
import Login from "./functionalComponents/Login";
import Main from "./functionalComponents/Main";
import Registration from "./functionalComponents/Registration";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/log">
            <Login />
            <Registration />
          </Route>
          <Route exact path="/todos">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
