import React from 'react';
import PostCard from '../Components/PostCard';

export default function CommunityPosts() {

    const displayPosts = () => {
        //PULL IN POSTS FROM BE AND MAP TO CARDS
    }

    return (
        <container className="flex flex-col items-center justify-end w-full h-3/4 border-solid border-4 border-blue-200">
            <PostCard />
            <PostCard />
            <PostCard />
        </container>
    )
}
