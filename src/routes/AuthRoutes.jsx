import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/cadastro" exact>
          <Register />
        </Route>
        <Route path="*" render={() => <Redirect to="/" />}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRoutes;
