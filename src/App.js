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
import publicIp from "public-ip";
import Header from "./Components/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCommunities, setUserCommunities] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [location, setLocation] = useState();
  const [posts, setPosts] = useState([]);
  const [communities, setCommunities] = useState([]);
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
          setUserCommunities(data.communities);
          setCurrentUser(data);
          getPosts();
          getCommunities();
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
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        });
    }
  };

  const getCommunities = () => {
    if (localStorage.token !== undefined) {
      fetch(`${baseUrl}/communities`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setCommunities(data);
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
      .then((response) => response.json())
      .then((data) => {
        if (data.token !== undefined) {
          localStorage.setItem("token", data.token);
          setIsLoggedIn(true);
          getClientIp();
        }
      })
      .then(() => {})
      .then(() => history.push("/user"));
  };

  const getClientIp = async () => {
    await publicIp
      .v6({ fallbackUrls: ["https://ifconfig.co/ip"] })
      .then((response) => {
        console.log(response);
        setLocation(response);
      });
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
    setLocation("");
    <Redirect to="/" />;
  };

  const addPost = (newPost) => {
    fetch(`${baseUrl}/posts`, {
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

  const addCommunity = (newCommunity) => {
    fetch(`${baseUrl}/communities`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newCommunity)
    })
    .then(() => getCommunities())
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
              location={location}
              userCommunities={userCommunities}
              setUserCommunities={setUserCommunities}
              currentUser={currentUser}
              posts={posts}
              addPost={addPost}
              communities={communities}
              setCommunities={setCommunities}
              addCommunity={addCommunity}
            />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
