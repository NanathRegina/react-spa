import { Header } from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Movie } from "./views/Movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 

        <Switch>

          <Route path="/about">
            <About/>
          </Route>

          <Route path="/movie/:id">
            <Movie/>
          </Route>

          <Route path="/">
            <Home/>  
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
