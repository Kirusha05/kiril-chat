import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    accentColor: string;
    bgColor: string;
    colorPrimary: string;
    colorSecondary: string;
    inputBg: string;
    textShadow: string;
    headerBorderColor: string;
    messageBoxColor: string;
  }
}
