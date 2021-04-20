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
        <div className="text-primary m-6">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-2">Sign Up for an account</h1>
            <form onSubmit={handleSubmit}>
                <label className="text-left">Username:</label>
                <input
                    name="name"
                    type="text"
                    value={formData.user.name}
                    onChange={handleChange}
                    placeholder="username"
                    className={"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"}
                />
                <label className="text-left">Password:</label>
                <input
                    name="password"
                    type="password"
                    value={formData.user.password}
                    onChange={handleChange}
                    placeholder="password"
                    className={"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"}
                />
                <label className="text-left">Age:</label>
                <input
                    name="age"
                    type="number"
                    value={formData.user.age}
                    onChange={handleChange}
                    placeholder={`#`}
                    className={"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"}
                />
                <label className="text-left">Email:</label>
                <input
                    name="email"
                    type="text"
                    value={formData.user.email}
                    onChange={handleChange}
                    placeholder={`name@company.com`}
                    className={"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"}
                />
                <div className="flex items-center mt-3">
                    <button 
                        className={"bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"}
                        value="Register"> 
                            Submit 
                    </button> 
                </div>
            </form> 
            <button className={"text-blue-500 hover:underline"} onClick={handleClick}onClick={handleClick}>Already registered? Login.</button>
        </div>
    )
}
