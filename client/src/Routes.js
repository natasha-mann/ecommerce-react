import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Womens from "./pages/Womens";
import Checkout from "./pages/Checkout";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/womens">
        <Womens />
      </Route>
      <Route exact path="/product/:id">
        <Product />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
    </Switch>
  );
};

export default Routes;
