import React from 'react';
import PostCard from '../Components/PostCard';

export default function CommunityPosts({ posts, community }) {

    const displayPosts = () => {
        if (community) {
            return posts.filter(post => post.community.id === community.id).map(post => <PostCard title={post.title} content={post.content} username={post.user.username}  />)
        }
    }

    return (
        <div className="flex flex-col items-center justify-end w-full h-3/4 max-h-118 overflow-hidden border-solid border-4 border-blue-200">
            {displayPosts()}
        </div>
    )
}
