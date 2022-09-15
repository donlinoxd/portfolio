import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      scroll-behavior: smooth;
    }
    body {
      background: ${({ theme }) => theme.color.light};
      color: ${({ theme }) => theme.color.dark};
      font-family: ${({ theme }) => theme.font.body};
      padding: 0 5%;
      overflow-x: hidden;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.dark};
    }

`;

export const theme = {
  color: {
    primary: "#1e90ff",
    dark: "#000000",
    light: "#f4f9ff",
    accent: "#414756",
    green: "#2ed573",
    yellow: "#fed330",
    orange: "#eb2f06",
    peach: "#ff6348",
  },
  font: {
    body: '"Poppins", "sans-serif"',
    header: '"Sigmar One", "sans-serif"',
  },
  fs: {
    lg: "2rem",
    md: "1.5rem",
    sm: "1rem",
  },
  sizes: {
    tablet: "@media (min-width: 600px)",
    laptop: "@media (min-width: 968px)",
    desktop: "@media (min-width: 1250px)",
  },
};
