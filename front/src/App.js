import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import HomeFeed from "./feed/HomeFeed";
import MyProfile from "./user/MyProfile";
import StartProject from "./StartProject";
import { useConnectionStatus } from "@thirdweb-dev/react";

const App = () => {
  const [isLogin, setIsLoggedIn] = useState(true);
  const connectionStatus = useConnectionStatus();

  return (
    <div className="app">
      <Router>
        <Header isLogin={isLogin} setIsLoggedIn={setIsLoggedIn} />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomeFeed />} />
            <Route path="/profile" element={<MyProfile />} />
            {connectionStatus === "connected" && (
              <Route path="/startproject" element={<StartProject />} />
            )}
          </Routes>
        </main>
        {/* <footer className="app-footer">
          <p>&copy; 2023 CheerChain All rights reserved.</p>
        </footer> */}
      </Router>
    </div>
  );
};

export default App;
