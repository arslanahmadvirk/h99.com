/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.css';
import Layout from '../components/layouts/MainLayout';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#FACA46',
      dark: '#25324b',
    },
    secondary: {
      light: '#ffffff',
      main: '#FACA46',
      dark: '#25324b',
    },
  },
  typography: {
    subtitle1: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: 18,
    },
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: '16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained'
            && ownerState.color === 'primary' && {
            backgroundColor: theme.palette.primary.main,
          }),
          ...(ownerState.variant === 'contained'
            && ownerState.color === 'inherit' && {
            backgroundColor: theme.palette.primary.light,
          }),
          ...(ownerState.size === 'small'
            ? {
              padding: '2px 20px',
            }
            : {
              padding: '6px 24px',
            }),
          borderRadius: 8,
          textTransform: 'none',
          fontSize: 16,
          fontWeight: 400,
        }),
      },
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

function App({ Component, pageProps }) {
  return (
   
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
   
  );
}

export default App;
