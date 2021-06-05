import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/perfil">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
