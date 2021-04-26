import React from 'react'

export default function PostCard({ title, content, username, time }) {

    const timePosted = time.substring(11, 16);

    return (
        <div className="flex flex-row items-start justify-center w-full h-1/6 p-2 hover:bg-gray-100">
            <div className="flex flex-row h-full items-center">
                <h2 className="font-bold mr-2 text-2xl text-center">{username}</h2>
                <h2 className="italic text-l pt-1">{timePosted}{}</h2>
            </div>
            <div className="flex flex-col justify-center w-full items-center">
                <h2 className="font-extrabold text-2xl" >{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}
