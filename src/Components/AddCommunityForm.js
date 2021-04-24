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
                className="create-community-data"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                />
            <input 
                className="create-community-data"
                type="text"
                name="location"
                value={formData.location}
                placeholder="City, ST"
                onChange={handleChange}    
            />
            <input 
                className="create-community-data"
                type="text"
                name="description"
                value={formData.description}
                placeholder="Description"
                onChange={handleChange}    
            />
            <input 
                className="btn-green"
                type="submit"
                value="Create"
            />
        </form>
    )
}
