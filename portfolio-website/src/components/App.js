import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import BeaverHubPage from '../pages/projects/BeaverHubPage';
import MyMailPage from '../pages/projects/MyMailPage';
import LetsGetCookingPage from '../pages/projects/LetsGetCookingPage';

import '../App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Katie Kimura's Portfolio</h1>
        </header>
        <Header />
        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/projects" element={<ProjectsPage />}></Route>
              <Route path="beaverhub" element={<BeaverHubPage />}></Route>
              <Route path="letsGetCooking" element={<LetsGetCookingPage />}></Route>
              <Route path="myMail" element={<MyMailPage />}></Route>
            </Routes>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Katie Kimura.</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
