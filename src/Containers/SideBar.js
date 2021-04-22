import React, {useState} from 'react'
import CommunitiesListItem from '../Components/CommunitiesListItem'

export default function SideBar({userCommunities, setUserCommunities, setCommunity}) {
    const [isToggled, setIsToggled] = useState(false)
    let communityList = userCommunities.map(community => <CommunitiesListItem key={community.id} community={community} setCommunity={setCommunity}/>)
    let toggle = (e) => {
        e.preventDefault()
        setIsToggled(!isToggled)
    }
    return (
        <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 border-solid border-4 border-green-200">
            <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-center">
                <a onClick={toggle} 
                    className="text-md font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                    href="">
                    { isToggled ? "My Communities" : "Communities" }
                </a>
            </div>
            {communityList}
        </div>
    )
}
