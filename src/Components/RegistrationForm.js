import React, { useState } from 'react'

export default function RegistrationForm({ register, setIsRegistered }) {

    const [formData, setFormData] = useState({
            user: {
                name: "", 
                password: "",
                age: "",
                email: ""
            }
    })

    const handleChange = (e) => {
        setFormData({
            user: {
                ...formData.user,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(formData)
        setIsRegistered(true)
    }

    const handleClick = () => {
        setIsRegistered(true)
    }

    return (
        <div>
            <h1>REGISTRATION FORM</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    name="name"
                    type="text"
                    value={formData.user.name}
                    onChange={handleChange}
                />
                <label>Password:</label>
                <input
                    name="password"
                    type="password"
                    value={formData.user.password}
                    onChange={handleChange}
                />
                <label>Age:</label>
                <input
                    name="age"
                    type="number"
                    value={formData.user.age}
                    onChange={handleChange}
                />
                <label>Email:</label>
                <input
                    name="email"
                    type="text"
                    value={formData.user.email}
                    onChange={handleChange}
                />
                <input type="submit" value="Register" />
            </form> 
            <button onClick={handleClick}>Already registered? Login.</button>
        </div>
    )
}
