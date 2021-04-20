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
        <div className="text-primary m-6">
            <h1 className="text-1xl font-medium text-primary mt-4 mb-12 text-center">Login to your account</h1>
            <form onSubmit={handleSubmit}>
                <label className="text-left">Username:</label>
                <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="username"
                    className={"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"}
                />
                <label>Password:</label>
                <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="password"
                    className={"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"}
                />
                <div className="flex items-center mt-3">   
                    <button 
                        className={"bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"} 
                        value="Login">
                            Login
                    </button>
                </div>
            </form> 
            <button className={"text-blue-500 hover:underline"} onClick={handleClick}>Need to register? Sign up for free</button>
        </div>
    )
}
