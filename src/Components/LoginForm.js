import React, { useState } from 'react'

export default function LoginForm({ login, setIsRegistered }) {

    const [formData, setFormData] = useState({name: "", password: ""})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(formData)
    }

    const handleClick = () => {
        setIsRegistered(false)
    }

    return (
        <div>
            <h1>LOGIN FORM</h1>
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
            <button onClick={handleClick}>Need to register?</button>
        </div>
    )
}
