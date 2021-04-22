import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import NavBar from '../Components/NavBar';
import ChatBox from '../Components/ChatBox';

export default function MainPage({ userCommunities, currentUser }) {
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
              console.log(data)
              setCommunities(data)
            });
          }
      }, []);

    return (
            <div className="md:flex flex-col md:flex-row md:min-h-screen md:min-w-screen pl-5 pt-3">
                <SideBar communities={communities} userCommunities={userCommunities} setCommunity={setCommunity}/>
                <container className="flex flex-col justify-between w-full md:w-9/12 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 border-solid border-4 border-red-200 ml-2" >
                    <NavBar community={community} />
                    <ChatBox community={community} currentUser={currentUser} />
                </container>
            </div>
    )
}
