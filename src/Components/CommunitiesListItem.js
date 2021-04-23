import React from 'react';

const CommunitiesListItem = ({community, setCommunity}) => {
    let handleClick = () => {
        setCommunity(community)
        console.log(community)
    } 
    return (
        <button
            onClick={handleClick}
            className="
                block
                px-4
                py-2
                mt-1
                text-sm
                font-semibold
                text-gray-900
                bg-gray-100
                rounded-sm
                dark-mode:bg-transparent
                dark-mode:hover:bg-gray-700
                dark-mode:focus:bg-gray-600
                dark-mode:focus:text-white
                dark-mode:hover:text-white
                dark-mode:text-gray-200
                hover:text-gray-900
                focus:text-gray-900
                hover:bg-gray-200
                focus:bg-gray-200
                focus:outline-none
                focus:shadow-outline
            ">
            <p className="">
                {community.name}
            </p>
        </button>
    );
}

export default CommunitiesListItem;
