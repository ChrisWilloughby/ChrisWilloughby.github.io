import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Loading from './components/loading';
import Navbar from './components/navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Contacts = React.lazy(() => import('./pages/contacts'));
// const Education = React.lazy(() => import('./pages/education'));
const Home = React.lazy(() => import('./pages/home/index'));
const Portfolio = React.lazy(() => import('./pages/portfolio'));
const Resume = React.lazy(() => import('./pages/resume'));
const Skills = React.lazy(() => import('./pages/skills'));


const App = () => {
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#3F51B5',
        light: '#C5CAE9',
        dark: '#303F9F',
        contrastText:'#FFFFFF'
      },
      secondary: {
        main: '#607D8B',
        light: '#F5EBFF',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#47008F',
      },
    
    },
  });
  
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/skills" element={<Skills/>} />
            {/* <Route path="/education" element={<Education />} /> */}
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
