import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import Registration from "./components/Registration";
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
