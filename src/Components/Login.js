import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

export default function Login({ login, register }) {

    const [isRegistered, setIsRegistered] = useState(true)

    return (
        <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4"> 
            <h3> Login </h3>
            <blockquote>
                <p className="text-lg font-semibold" >Welcome to Diversify</p>
            </blockquote>
            </div> 
            {isRegistered ? <LoginForm login={login} setIsRegistered={setIsRegistered} /> : <RegistrationForm register={register} setIsRegistered={setIsRegistered} />}
        </figure>
    )
}
