import { createTheme } from "@mui/material";

const jhoow = createTheme({
  palette: {
    primary: {
      light: '#2B2D35',
      main: '#3A3C44',
      dark: '#23252D'
    },
    secondary: {
      light: '#059b5e',
      main: '#06CB7A',        
      dark: '#059b5e'
    },
    warning: {
      light: '#059b5e',
      main: '#059b5e',
      dark: '#059b5e'
    },
    success: {
      light: '#059b5e',
      main: '#059b5e',
      dark: '#059b5e'
    },
    error: {
      light: '#059b5e',
      main: '#059b5e',
      dark: '#059b5e'
    },
    info: {
      light: '#247FFF',
      main: '#247FFF',
      dark: '#247FFF'
    }
  }
});

const theme = {
  jhoow
}

export default theme