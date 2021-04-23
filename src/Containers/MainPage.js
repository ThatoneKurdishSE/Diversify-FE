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
            <div className="main-page-container">
                <SideBar communities={communities} userCommunities={userCommunities} setCommunity={setCommunity}/>
                <div className="post-container" >
                    <NavBar community={community} />
                    <CommunityPosts posts={posts} community={community} />
                    <ChatBox community={community} currentUser={currentUser} location={location} addPost={addPost} />
                </div>
            </div>
    )
}
