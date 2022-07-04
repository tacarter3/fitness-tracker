import NavBar from './components/NavBar'
import UserProfile from './components/UserProfile';
import ActivityReport from './components/ActivityReport';
import About from './components/About';
import Workout from './components/Workout';
import Calories from './components/Calories';
import WaterIntake from './components/WaterIntake';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './components/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<SignIn />}>
          </Route>
          <Route exact path="/activity-tracker" element={<ActivityReport />}>
          </Route>
          <Route exact path="/water-intake" element={<WaterIntake />}>
          </Route>
          <Route exact path="/calories" element={<Calories />}>
          </Route>
          <Route exact path="/add-workout" element={<Workout />}>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;