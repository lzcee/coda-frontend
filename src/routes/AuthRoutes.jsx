import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/cadastrar">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRoutes;
