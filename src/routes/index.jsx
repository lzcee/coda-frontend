import { useAuth } from "../contexts/auth";

import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";

const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
