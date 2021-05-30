import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FrontPage from "./Pages/FrontPage/FrontPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import fakeData from "./fakeData.json";

import Headers from "./Pages/FrontPage/Headers/Headers";
import ProductDetails from "./Pages/ProductPage/ProductDetails";
import ProductListing from "./Pages/ProductPage/ProductListing";

function App() {
  // console.log(fakeData);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route exact path="/">
            <Headers />
            <ProductListing></ProductListing>
          </Route>
          <Route path="/product/:productId">
            <ProductDetails></ProductDetails>
          </Route>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
