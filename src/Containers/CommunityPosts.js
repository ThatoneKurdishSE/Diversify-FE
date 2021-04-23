import React, { useState } from 'react';
import PostCard from '../Components/PostCard';

export default function CommunityPosts({ posts, community }) {
  const addPost = (newPost) => {
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
      .then(response => response.json())
  }

    const displayPosts = () => {
        if (community) {
            return posts.filter(post => post.community_id === community.id).map(post => <PostCard title={post.title} content={post.content} username={post.user.username}  />)
        }
    }

    return (
        <div className="flex flex-col items-center justify-end w-full h-3/4 max-h-118 overflow-hidden border-solid border-4 border-blue-200">
            {displayPosts()}
        </div>
    )
}
