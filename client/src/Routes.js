import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Basket from "./pages/Basket";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/product">
        <Product />
      </Route>
      <Route exact path="/basket">
        <Basket />
      </Route>
    </Switch>
  );
};

export default Routes;
