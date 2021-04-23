// import './App.css';
import React, { useState, useEffect } from "react";
import Login from "./Components/Login";
import MainPage from "./Containers/MainPage";
import PrivateRoute from "./Components/PrivateRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCommunities, setUserCommunities] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [locationDetails, setLocationDetails] = useState(null);
  const [posts, setPosts] = useState([]);

  const parseHTTPResponse = response => response.json()
  const baseUrl = "http://localhost:3000";

  useEffect(() => {
    if (localStorage.token !== undefined) {
      fetch(`${baseUrl}/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then( parseHTTPResponse )
        .then((data) => {
          console.log(data);
          setUserCommunities(data.communities);
          setCurrentUser(data);
          getPosts();
        });
    }
  }, [isLoggedIn]);

  const getPosts = () => {
    if (localStorage.token !== undefined) {
      fetch(`${baseUrl}/posts`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then( parseHTTPResponse )
        .then((data) => {
          setPosts(data);
        });
    }
  };

  const login = (user, history) => {
    fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then( parseHTTPResponse )
      .then((data) => {
        if (data.token !== undefined) {
          localStorage.setItem("token", data.token);
          setIsLoggedIn(true);
          getGeolocationDetails();
        }
      })
      .then(() => {})
      .then(() => history.push("/user"));
  };

  const getGeolocationDetails = () => {
    fetch('https://geolocation-db.com/json/ef6c41a0-9d3c-11eb-8f3b-e1f5536499e7/ipv6')
      .then( parseHTTPResponse )
      .then( details => setLocationDetails(details) )
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
        console.log(response);
      })
      .then(() => history.push("/"));
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setLocationDetails(null);
    <Redirect to="/" />;
  };

  const addPost = (newPost) => {
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
      .then(() => getPosts())
  }
  
  return (
    <Router>
      <div className="App">
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
            <Header logout={logout} />
            <MainPage
              location={locationDetails}
              userCommunities={userCommunities}
              setUserCommunities={setUserCommunities}
              currentUser={currentUser}
              posts={posts}
              addPost={addPost}
            />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
