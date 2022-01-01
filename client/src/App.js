import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TimerScreen from "./screens/TimerScreen";
import ListTimerScreen from "./screens/ListTimersScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app-title">
          <h2>Tasks Reminder</h2>
        </div>
        <div className="alert-container"></div>
        <div className="app-input">
          <form>
            <div>
              <Link to="/timer">
                <span>TimerScreen</span>
              </Link>
            </div>
            <div>
              <Link to="/list-timers">
                <span>ListTimerScreen</span>
              </Link>
            </div>
          </form>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/timer" element={<TimerScreen />}></Route>
            <Route path="/list-timers" element={<ListTimerScreen />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
