import React from 'react';

const CommunitiesListItem = ({community, setCommunity}) => {
    let handleClick = () => {
        setCommunity(community)
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
