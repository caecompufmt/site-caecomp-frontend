import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryBlue: string;
      secondaryBlue: string;
      secondaryYellow: string;
      secondaryPurple: string;

      white: string;
      dark: string;
      light: string;

      success: string;
      error: string;
      warning: string;
      info: string;

      textDark: string;
      textLight: string;

      borderColor: string;
      backgroundColor: string;
      hoverLight: string;
    };
    borderRadius: {
      default: string;
      small: string;
      xsmall: string;
    };
    queries: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    boxShadow: {
      highest: string;
      high: string;
      medium: string;
      low: string;
    };
  }
}
