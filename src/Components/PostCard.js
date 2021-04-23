import React from 'react'

export default function PostCard({ title, content, username, time }) {

    const timePosted = time.substring(11, 16);

    return (
        <div className="flex flex-col items-start justify-center w-full h-1/6 p-2 hover:bg-gray-100">
            <div className="flex flex-row">
                <h2 className="font-bold mr-2">{username}</h2>
                <h2 className="italic">{timePosted}{}</h2>
            </div>
            <div className="flex flex-col justify-center w-full items-center">
                <h2 className="font-extrabold">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}
