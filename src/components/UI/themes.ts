import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  *:not(.delay-transition) {
    transition: 0.15s ease-out;
  }

  *::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.accentColor};
    border-radius: 10px;
  }

  body {
    background: ${({theme}) => theme.bgColor} !important;
  }
`;

export const lightTheme: DefaultTheme = {
  accentColor: "#C33358",
  bgColor: "white",
  colorPrimary: "#333",
  colorSecondary: "#777",
  inputBg: "#f0f0f0",
  textShadow: "0 0 8px rgba(195,51,88, 0.1)",
  headerBorderColor: "rgba(0, 0, 0, 0.1)",
  messageBoxColor: "#f0f0f0",
};

export const darkTheme: DefaultTheme = {
  accentColor: "#C33358",
  bgColor: "#36393F",
  colorPrimary: "white",
  colorSecondary: "rgba(255, 255, 255, 0.4)",
  inputBg: "#32353B",
  textShadow: "0 0 5px #C33358",
  headerBorderColor: "rgba(255, 255, 255, 0.1)",
  messageBoxColor: "#32353B",
};
