import { AuthProvider } from "./contexts/auth";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Theme from "./styles/theme";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Theme>
  );
};

export default App;
