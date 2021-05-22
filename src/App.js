import { BrowserRouter, Switch } from "react-router-dom";
import AppRoute from "./AppRoute";
import UserProvider from "./config/contexts/auth";
import routes from "./config/routing/routes";
import GlobalStyle from "./styles/global";
import Theme from "./styles/theme";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <UserProvider>
        <BrowserRouter>
          <Switch>
            {routes.map((route) => (
              <AppRoute
                key={route.path}
                path={route.path}
                exact={true}
                component={route.component}
                isPrivate={route.isPrivate}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </Theme>
  );
};

export default App;
