import React, {useState} from 'react'
import CommunitiesListItem from '../Components/CommunitiesListItem'

export default function SideBar({userCommunities, communities, setUserCommunities, setCommunity}) {
    const [isToggled, setIsToggled] = useState(false)

    const mapCommunities = (communityArray) => communityArray.map(community => {
        return (
            <CommunitiesListItem
            key={community.id}
            community={community}
            setCommunity={setCommunity}
            />
        )
    })

    let communityList = mapCommunities(communities)
    let userCommunityList = mapCommunities(userCommunities)
    
    let toggle = (e) => {
        e.preventDefault()
        setIsToggled(!isToggled)
    }

    return (
        <div
            className="
                flex
                flex-col
                w-full
                md:w-64
                text-gray-700
                bg-white
                dark-mode:text-gray-200
                dark-mode:bg-gray-800
                flex-shrink-0
                border-solid
                border-4
                border-green-200
            ">
            <div
                className="
                    flex-shrink-0
                    px-8
                    py-4
                    flex
                    flex-row
                    items-center
                    justify-center
                ">
                <button
                    onClick={toggle}
                    className="
                        text-md
                        font-semibold
                        tracking-widest
                        text-gray-900
                        uppercase
                        rounded-lg
                        dark-mode:text-white
                        focus:outline-none
                        focus:shadow-outline
                        ">
                    { isToggled ? "My Communities" : "Communities" }
                </button>
            </div>
            { isToggled? 
            (userCommunityList)
            : 
            (communityList)
            }
        </div>
    )
}
