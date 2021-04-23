/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Navbar({ community , currentUser, navbarOpen}) {
  const baseUrl = "http://localhost:3000"
  const join = () => {
    const communityId = community.id
    const userId = currentUser.id

    fetch(`${baseUrl}/user_communities`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userId, communityId)
    })
    .then((response) => {
      response.json();
      console.log(response);
    })
  }

  const leave = () => {
    const communityId = community.id
    const userId = currentUser.id

    fetch(`${baseUrl}/user_communities`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userId, communityId)
    })
    .then((response) => {
      response.json();
      console.log(response);
    })
  }

  const isCommunityMember = () => {
    // Create a function to check if 
    // currentUser is member of Community
    // if user is a member of the community, return true
    // else return false
  }

  const handleCommunityMembership = () => {
    return (
      isCommunityMember
      ? leaveButton()
      : joinButton()
    )
  }

  const joinButton = () => {
    return (
      <li className="nav-item">
        <a
          onClick={join}
          className="
            px-3
            py-2
            flex
            items-center
            text-xs
            font-bold
            leading-snug
            hover:opacity-75
            text-white
          "
          href="#"
        >
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full inline-flex">
          <span className="pl-1">Join</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </a>
      </li>
    )
  }

  const leaveButton = () => {
    return (
      <li className="nav-item">
        <a
          onClick={leave}
          className="
            px-3
            py-2
            flex
            items-center
            text-xs
            font-bold
            leading-snug
            hover:opacity-75
            text-white
          "
          href="#"
        >
          <button class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full inline-flex">
          <span className="pl-1">Leave</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </a>
      </li>
    )
  }

  const communityNavBar = () => {
    return (
      <>
        <ul
          className="
            flex
            flex-col
            lg:flex-row
            list-none
            lg:ml-auto
          ">
          <li className="nav-item">
            <a
              className="
                px-3
                py-2
                flex
                items-center
                text-xs
                font-bold
                leading-snug
                hover:opacity-75
                text-white
              "
              href="#"
            >
              <span className="ml-2">
                View All Members(Modal)
              </span>
            </a>
          </li>
        </ul>
        <ul
          className="
            flex
            flex-col
            lg:flex-row
            list-none
            lg:ml-auto
          ">
          { handleCommunityMembership() }
          <li className="sign-up">
            <a
              className="
                px-3
                py-2
                flex
                items-center
                text-xs
                font-bold
                leading-snug
                hover:opacity-75
                text-white
              "
              href="#"
            >
            <div className="inline-flex mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="pl-1"> details </span> 
            </div> 
            </a>
          </li>
        </ul>
      </>
    )
  }

  const communitySelect = () => {
    return (
      <>
                <ul
          className="
            flex
            flex-col
            lg:flex-row
            list-none
            lg:ml-auto
          ">
          <li className="nav-item">
            <a
              className="
                px-3
                py-2
                flex
                items-center
                text-xs
                font-bold
                leading-snug
                hover:opacity-75
                text-white
              "
              href="#"
            >
              <span className="ml-2">
                Please select a community, or create one of your own!
              </span>
            </a>
          </li>
        </ul>
      </>
    )
  }

  return (
    <>
      <nav
        className="community-navbar">
        <div 
          className="
            container
            px-4
            mx-auto
            flex
            flex-wrap
            items-center
            justify-between
          ">
          <div>
            <a
              className="
                text-md
                font-bold
                leading-relaxed
                inline-block
                mr-4
                py-2
                whitespace-nowrap
                text-white
              "
              href="#"
            >
              {community === null
                ? `Diversify`
                : `${community.name} ( ${community.location} )`}
            </a>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center flex"
              // +
              // (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >    
          {
            navbarOpen
            ? communityNavBar()
            : communitySelect()
          }
          </div>
        </div>
      </nav>
    </>
  );
}
