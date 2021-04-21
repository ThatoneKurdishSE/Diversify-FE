import React, { useState } from "react";

export default function Login({ login }) {
const [formData, setFormData] = useState({ name: "", password: "" });

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  login(formData);
};

return (
  <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <h3> Login </h3>
      <blockquote>
        <p className="text-lg font-semibold">Welcome to Diversify</p>
      </blockquote>
    </div>
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      <label>Password:</label>
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input type="submit" value="Login" />
    </form>
  </figure>
);
}
