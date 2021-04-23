import React, { useState } from 'react'

export default function AddCommunityForm({ addCommunity }) {

    const [formData, setFormData] = useState({
        name: "",
        location: "",
        description: ""
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addCommunity(formData)
    }
    
    return (
        <form
            className="flex flex-col w-full h-full items-center justify-evenly"
            onSubmit={handleSubmit}
        >
            <input 
                className="border border-black w-3/4 h-8 p-0.5"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                />
            <input 
                className="border border-black w-3/4 h-8 p-0.5"
                type="text"
                name="location"
                value={formData.location}
                placeholder="City, ST"
                onChange={handleChange}    
            />
            <input 
                className="border border-black w-3/4 h-8 p-0.5"
                type="text"
                name="description"
                value={formData.description}
                placeholder="Description"
                onChange={handleChange}    
            />
            <input 
                className="w-48 h-8"
                type="submit"
                value="Create"
            />
        </form>
    )
}
