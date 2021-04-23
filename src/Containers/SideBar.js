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
            className="side-bar">
            <div
                className="sb-container">
                <button
                    onClick={toggle}
                    className="sb-title">
                    { isToggled ? "My Communities" : "Communities" }
                </button>
            </div>
            { isToggled? 
            (userCommunityList)
            : 
            (communityList)
            }
            <div className="flex items-center mt-3 justify-center">
                <button className="btn-blue">
                    Create new community
                </button>
            </div>
        </div>
    )
}
