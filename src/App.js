// import './App.css';
import React, { useState, useEffect } from "react";
import Login from "./Components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const baseUrl = "http://localhost:3000";

  const login = (user) => {
    console.log("connected");
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
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <h1>You're logged in.</h1> : <Login login={login} />}
    </div>
  );
}

export default App;
