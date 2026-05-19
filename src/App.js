import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Jobs from "./Components/Jobs";
import Contact from "./Components/Contactus";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [darkMode, setDarkMode] = useState(false);



  /* CHECK LOGIN STATUS */

  useEffect(() => {

    const loginStatus = localStorage.getItem("login");

    if (loginStatus === "true") {

      setIsLoggedIn(true);

    }

  }, []);




  return (

    <div className={darkMode ? "dark-mode" : "light-mode"}>

      <Router>

        {/* NAVBAR */}

        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />



        {/* ROUTES */}

        <Routes>



          {/* HOME PAGE */}

          <Route
            path="/"
            element={<Home />}
          />




          {/* LOGIN */}

          <Route
            path="/login"
            element={

              isLoggedIn

                ? <Navigate to="/" />

                : <Login setIsLoggedIn={setIsLoggedIn} />

            }
          />




          {/* REGISTER */}

          <Route
            path="/register"
            element={

              isLoggedIn

                ? <Navigate to="/" />

                : <Register />

            }
          />




          {/* JOBS */}

          <Route
            path="/jobs"
            element={

              isLoggedIn

                ? <Jobs />

                : <Navigate to="/login" />

            }
          />




          {/* PROFILE */}

          <Route
            path="/profile"
            element={

              isLoggedIn

                ? <Profile />

                : <Navigate to="/login" />

            }
          />




          {/* CONTACT */}

          <Route
            path="/contact"
            element={<Contact />}
          />




          {/* INVALID ROUTE */}

          <Route
            path="*"
            element={<Navigate to="/" />}
          />



        </Routes>

      </Router>

    </div>
  );
}

export default App;