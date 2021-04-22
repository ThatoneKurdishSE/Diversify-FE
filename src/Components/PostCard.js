import React from 'react'

export default function PostCard({ title, content, username }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-1/6 border-solid border-4 border-blue-200">
            <h1>{username}</h1>
            <h1>{title}</h1>
            <h2>{content}</h2>
        </div>
    )
}
