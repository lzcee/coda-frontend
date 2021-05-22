import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryPink: "#DE2E49",
    secundaryPink: "#FF6D7A",
    orange: "#FE6B37",
    blue: "#42434D",
    white: "#F2F2F2",
  },
  fonts: ["Open Sans"],
  fontSizes: {
    mobile: "12px",
    tablet: "14px",
    desktop: "16px",
  },
  container: {
    mobile: "24px",
    tablet: "48px",
    desktop: "96px",
    fullDesktop: "calc((100% - 1200px) / 2)",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
