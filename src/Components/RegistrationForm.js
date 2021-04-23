import React, { useState } from "react";

export default function RegistrationForm({ register, setIsRegistered, history }) {
  const [formData, setFormData] = useState({
    user: {
      username: "",
      password: "",
      age: "",
      email: "",
    },
  });

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
    register(formData, history);
    setIsRegistered(true);
  };

  const handleClick = () => {
    setIsRegistered(true);
  };

  return (
    <div className="text-primary m-6">
      <div className="flex items-center mt-3 justify-center">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
          Sign Up for an account
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
        <label className="text-left">Password:</label>
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
        <label className="text-left">Age:</label>
        <input
          name="age"
          type="number"
          value={formData.user.age}
          onChange={handleChange}
          placeholder={`Must be over 18 years old`}
          className={
            "insrt-data"
          }
        />
        <label className="text-left">Email:</label>
        <input
          name="email"
          type="text"
          value={formData.user.email}
          onChange={handleChange}
          placeholder={`Name@company.com`}
          className={
            "insrt-data"
          }
        />
        <div className="flex items-center mt-3 justify-center">
          <button
            className={
              "btn-blue"
            }
            value="Register"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex items-center mt-3 justify-center">
        <button
          className={"text-blue-500 hover:underline"}
          onClick={handleClick}
        >
          Already registered? Login.
        </button>
      </div>
    </div>
  );
}
