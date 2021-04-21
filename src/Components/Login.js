import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

export default function Login(props) {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <figure className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-lg font-semibold">Welcome to Diversify</p>
        </blockquote>
        {props.isLoggedIn ? <Redirect to="/user" /> : null}
        {isRegistered ? (
          <LoginForm {...props} setIsRegistered={setIsRegistered} />
        ) : (
          <RegistrationForm
            {...props}
            setIsRegistered={setIsRegistered}
          />
        )}
      </div>
    </figure>
  );
}
