import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';

export default function MainPage({communities}) {
    console.log(communities)
    return (
            <div className="md:flex flex-col md:flex-row md:min-h-screen w-full pl-5 pt-3">
                <SideBar communities={communities}/>
                <h1 className="">You're logged in.</h1>
            </div>
    )
}
