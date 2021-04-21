// import './App.css';
import React, { useState, useEffect } from "react";
import Login from "./Components/Login";
import MainPage from "./Containers/MainPage";
import NavBar from './Components/NavBar';
import PrivateRoute from './Components/PrivateRoute'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const baseUrl = "http://localhost:3000";

  useEffect(() => {
    if (localStorage.token) {
      fetch(`${baseUrl}/communities`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setIsLoggedIn(true)
        });
    }
  }, [isLoggedIn]);

  const login = (user, history) => {
    fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => localStorage.setItem("token", data.token))
      .then(() => setIsLoggedIn(true))
      .then(() => history.push("/user"));
  };

  const register = (user, history) => {
    fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        response.json()
        console.log(response)
      })
      .then(() => history.push("/"))
  }

  const logout = () => {
    localStorage.clear()
    setIsLoggedIn(false)
  }

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} login={login} register={register} isLoggedIn={isLoggedIn} />} />
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
