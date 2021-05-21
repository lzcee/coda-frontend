import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import { LOGIN_PATH } from "./config/routing/paths";
import { UserContext } from "./config/contexts/auth";

const AppRoute = ({ component: Component, path, isPrivate, ...props }) => {
  const { user } = useContext(UserContext);
  const isAuthenticated = user.auth ? true : false;

  return (
    <Route
      path={path}
      render={(props) =>
        isPrivate && !isAuthenticated ? (
          <Redirect to={{ pathname: LOGIN_PATH }} />
        ) : (
          <Component {...props} />
        )
      }
      {...props}
    />
  );
};

export default AppRoute;
