import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResearchPage from './pages/ResearchPage';
import ProjectsPage from './pages/ProjectsPage';
import BeaverHubPage from './pages/projects/BeaverHubPage';
import MyMailPage from './pages/projects/MyMailPage';
import LetsGetCookingPage from './pages/projects/LetsGetCookingPage';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <body>
            <div className="content-area">
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="research" element={<ResearchPage />}></Route>
                <Route path="/projects" element={<ProjectsPage />}></Route>
                <Route path="/projects/beaverhub" element={<BeaverHubPage />}></Route>
                <Route path="/projects/letsGetCooking" element={<LetsGetCookingPage />}></Route>
                <Route path="/projects/myMail" element={<MyMailPage />}></Route>
              </Routes>
            </div>
          </body>
        </main>
        <footer>
          <div>
          <a href="mailto:katiekimura2022@gmail.com" title="Email" className="footer-link">Contact</a>
          <a href="/Katie-Kimura-Resume.pdf" target="_blank" download title="Download resume" className="footer-link">Resume</a>
          </div>
          <p>&copy; 2024 Katie Kimura.</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
