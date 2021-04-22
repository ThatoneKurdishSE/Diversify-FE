// import './App.css';
import React, { useState, useEffect } from "react";
import Login from "./Components/Login";
import MainPage from "./Containers/MainPage";
import NavBar from "./Components/NavBar";
import PrivateRoute from "./Components/PrivateRoute";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserCommunities, setCurrentUserCommunities] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  const baseUrl = "http://localhost:3000";

  useEffect(() => {
    if (localStorage.token !== undefined) {
      fetch(`${baseUrl}/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setCurrentUserCommunities(data.communities)
          setCurrentUser(data)
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
      .then((data) => {
        if(data.token !== undefined) {
          localStorage.setItem("token", data.token)
          setIsLoggedIn(true)
        }
      })
      .then(() => history.push("/user"))
  };

  const register = (user, history) => {
    fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        response.json();
      })
      .then(() => history.push("/"));
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    <Redirect to="/" />
  };

  return (
    <Router>
      <div className="App">
        <Header logout={logout}/>
        {/* <NavBar /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Login
                {...props}
                login={login}
                register={register}
                isLoggedIn={isLoggedIn}
              />
            )}
          />
          <PrivateRoute>
            <MainPage currentUserCommunities={currentUserCommunities} currentUser={currentUser} />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
