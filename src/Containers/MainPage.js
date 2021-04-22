import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import NavBar from '../Components/NavBar';
import ChatBox from '../Components/ChatBox';

export default function MainPage({communities}) {
    return (
            <div className="md:flex flex-col md:flex-row md:min-h-screen md:min-w-screen pl-5 pt-3">
                <SideBar communities={communities}/>
                <container className="flex flex-col justify-between w-full md:w-9/12 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 border-solid border-4 border-red-200 ml-2" >
                    <NavBar />
                    <ChatBox />
                </container>
            </div>
    )
}
