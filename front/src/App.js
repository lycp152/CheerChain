import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import About from "./about/About";
import HomeFeed from "./feed/HomeFeed";

const App = () => {
  const [isLogin, setIsLoggedIn] = useState(true);
  return (
    <div className="app">
      <Router>
        <Header isLogin={isLogin} setIsLoggedIn={setIsLoggedIn} />
        <main className="app-main">
          <Routes>
            {isLogin ? (
              <>
                <Route path="/" element={<HomeFeed />} />
              </>
            ) : (
              <>
                <Route path="/" element={<About />} />
              </>
            )}
          </Routes>
        </main>
        {/* <footer className="app-footer">
          <p>&copy; 2023 All rights reserved.</p>
        </footer> */}
      </Router>
    </div>
  );
};

export default App;
