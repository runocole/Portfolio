import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {createTheme, ThemeProvider, CssBaseline} from '@mui/material';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import WhatIDo from './components/WhatIDo';

//creating a custom pink and black theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC0CB',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontFamily: 'Dancing Script, cursive',
    },
    h2: {
      fontFamily: 'Dancing Script, cursive',
    },
    h3: {
      fontFamily: 'Dancing Script, cursive',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        }
      }
    }
  } 
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <WhatIDo />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App; 