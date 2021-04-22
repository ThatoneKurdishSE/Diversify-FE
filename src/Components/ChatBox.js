import React, { useState } from 'react';

export default function ChatBox({ community, currentUser, location, addPost }) {

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        ip_address: "",
        user_id: "",
        community_id: "",
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            user_id: currentUser.id,
            ip_address: "0",
            community_id: community.id,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        // event.preventDefault();
        addPost(formData)
    }

    return (
        <section className="flex flex-row h-1/5 md:w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 border-solid border-4 border-green-200">
            <form className="flex flex-col w-full h-full items-center justify-evenly" onSubmit={handleSubmit}>
                <input className="border border-black w-3/4 h-8 p-0.5" type="text" name="title" placeholder="Post Title" onChange={handleChange} />
                <input className="border border-black w-3/4 h-8 p-0.5" type="text" name="content" placeholder="Message" onChange={handleChange} />
                <input className="w-48 h-8" type="submit" value="Post" />
            </form>
        </section>
    )
}
