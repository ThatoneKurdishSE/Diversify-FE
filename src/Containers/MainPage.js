import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import NavBar from '../Components/NavBar';
import ChatBox from '../Components/ChatBox';
import CommunityPosts from '../Containers/CommunityPosts';

export default function MainPage({ userCommunities, currentUser, posts, location, addPost }) {
    const [community, setCommunity] = useState(null)
    const [communities, setCommunities] = useState([])

    const baseUrl = "http://localhost:3000";

    useEffect(() => {
        if (localStorage.token !== undefined) {
          fetch(`${baseUrl}/communities`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              setCommunities(data)
            });
          }
      }, []);

    return (
            <div className="md:flex flex-col md:flex-row md:min-h-screen md:min-w-screen pl-5 pt-3">
                <SideBar communities={communities} userCommunities={userCommunities} setCommunity={setCommunity}/>
                <div className="flex flex-col justify-between w-full md:w-9/12 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 border-solid border-4 border-red-200 ml-2" >
                    <NavBar community={community} />
                    <CommunityPosts posts={posts} community={community} />
                    <ChatBox community={community} currentUser={currentUser} location={location} addPost={addPost} />
                </div>
            </div>
    )
}
