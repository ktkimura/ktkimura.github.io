import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import BeaverHubPage from "./pages/projects/BeaverHubPage";
import FinanceAppPage from "./pages/projects/FinanceAppPage";
import LetsGetCookingPage from "./pages/projects/LetsGetCookingPage";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <div className="content-area">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/beaverhub" element={<BeaverHubPage />}></Route>
              <Route
                path="/letsGetCooking"
                element={<LetsGetCookingPage />}
              ></Route>
              <Route path="/financeApp" element={<FinanceAppPage />}></Route>
            </Routes>
          </div>
        </main>
        <footer>
          <a
            href="https://github.com/ktkimura/ktkimura.github.io"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Website Github Repo
          </a>
          <p>&copy; 2024 Katie Kimura.</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
