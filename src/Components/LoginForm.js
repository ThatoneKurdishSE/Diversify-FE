import React, { useEffect, useState } from "react";

export default function LoginForm({ login, setIsRegistered, history }) {
  const [formData, setFormData] = useState({ 
    user: {
      username: "", 
      password: "" 
    },
  });

  useEffect(() => {
    localStorage.removeItem('token')
  }, [])

  const handleChange = (e) => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData, history);
  };

  const handleClick = () => {
    setIsRegistered(false);
  };

  return (
    <div className="text-primary m-6">
      <div className="flex items-center mt-3 justify-center">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
          Login to your account
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="text-left">Username:</label>
        <input
          name="username"
          type="text"
          value={formData.user.username}
          onChange={handleChange}
          placeholder="Username"
          className={
            "insrt-data"
          }
        />
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={formData.user.password}
          onChange={handleChange}
          placeholder="Password"
          className={
            "insrt-data"
          }
        />
        <div className="flex items-center mt-3 justify-center">
          <button
            className={
              "btn-blue"
            }
            value="Login"
          >
            Login
          </button>
        </div>
      </form>
      <div className="flex items-center mt-3 justify-center">
      <button className={"justify-center text-blue-500 hover:underline"} onClick={handleClick}>
        Need to register? Sign up for free
      </button>
      </div>
    </div>
  );
}
