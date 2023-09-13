import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ToasterProvider from './providers/ToasterProvider';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme	 = createTheme({
  palette: {
      mode: "dark",
  },
});

ReactDOM.render(
  
  <React.StrictMode>
    
    <Router>
    <ThemeProvider theme={darkTheme}>
      <ToasterProvider />
      <CssBaseline />
      <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();
