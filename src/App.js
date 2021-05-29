import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FrontPage from "./Pages/FrontPage/FrontPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import fakeData from "./fakeData.json";

import Headers from "./Pages/FrontPage/Headers/Headers";

function App() {
  console.log(fakeData);
  return (
    <div className="App">
      <Router>
      <Headers />
        <Switch>
          <Route exact path="/" >
            <FrontPage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
