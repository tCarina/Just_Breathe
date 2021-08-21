import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Question from "./Components/Question";
import Home from "./Components/Home";
import Help from "./Components/Help";
import About from "./Components/About";
import Techniques from "./Components/Techniques";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Question />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/techniques">
            <Techniques />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
