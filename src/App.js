// import './App.css';
import React, { useState, useEffect } from "react";
import Login from "./Components/Login";

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
        .then((data) => console.log(data));
      setIsLoggedIn(true);
      console.log(isLoggedIn);
    }
  }, [isLoggedIn]);

  const login = (user) => {
    fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => localStorage.setItem("token", data.token));
      setIsLoggedIn(true)
  };

  const register = (user) => {
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
  }

  return (
    <div className="App">
      {isLoggedIn ? <h1>You're logged in.</h1> : <Login login={login} register={register} />}
    </div>
  );
}

export default App;
