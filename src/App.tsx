import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPagePortfolio/MainPagePortfolio';
import AboutPage from './pages/AboutPagePortfolio/AboutPagePortfolio';
import ProjectsPage from './pages/ProjectsPagePortfolio/ProjectsPagePortfolio';

function App() {


  return (

  <>
    <Router basename="">

        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about" element={<AboutPage/>}>
          </Route>
          <Route path="/projects" element={<ProjectsPage/>}>
          </Route>
        </Routes>

    </Router> 
  </>

  )
}

export default App
