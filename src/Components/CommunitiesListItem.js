import React from 'react';

const CommunitiesListItem = ({community, setCommunity, setNavbarOpen}) => {
    let handleClick = () => {
        setCommunity(community)
        setNavbarOpen(true)
        console.log(community)
    } 
    return (
        <button
            onClick={handleClick}
            className="community-li">
            <p className="">
                {community.name}
            </p>
        </button>
    );
}

export default CommunitiesListItem;
