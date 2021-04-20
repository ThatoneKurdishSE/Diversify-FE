// import './App.css';
import React, { useState, useEffect } from 'react'
import Login from './Components/Login'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const baseUrl = "http://localhost:3000"

  const login = (user) => {
    fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    setIsLoggedIn(true)
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch(`${baseUrl}/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="App">
      <div className="text-red-900">Hello</div>
      {isLoggedIn ? <h1>You're logged in.</h1> : <Login login={login} />}
    </div>
  );
}

export default App;
