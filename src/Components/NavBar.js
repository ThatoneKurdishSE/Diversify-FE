/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Navbar({ community , currentUser, navbarOpen }) {
  const baseUrl = "http://localhost:3000"
  const join = () => {
    const communityId = community.id
    const userId = currentUser.id
    const newUserCommunity = {
      user_id: userId,
      community_id: communityId
    }

    fetch(`${baseUrl}/user_communities`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUserCommunity)
    })
    .then(response => response.json())
  }

  const joinButton = () => {
    return (
      <li className="nav-item">
        <a
          className="join-leave"
          href="#"
        >
        <div className="w-28 h-8 items-center">
          <button className="join-btn" onClick={join}>
          <span className="pl-1">Join</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
        </a>
      </li>
    )
  }

  const leaveButton = () => {
    return (
      <li className="nav-item">
        <a
          className="join-leave"
          href="#"
        >
          <div className="wrapper">

                <div className="joined">
                    {/* THIS BUTTON IS JUST FOR LOOKS */}
                    <button className="joined-btn">
                        <span className="pl-1 pr-2 hover:invisible">Joined</span>
                    </button>
                    <div className="leave">
                        {/* PUT ONCLICK EVENT IN THIS BUTTON */}
                        <button className="leave-btn">
                            <span className="pl-1 hover:invisible">Leave</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
          </div>
        </a>
      </li>
    )
  }

  const handleCommunityMembership = () => {
    return (
      joinButton()
      // leaveButton()
    )
  }

  return (
    <>
      <nav className="community-navbar">
        <div className="c-navbar-container">
          <div>
            <a className="community-title" href="#">
              {community === null
                ? `Diversify`
                : `${community.name} ( ${community.location} )`}
            </a>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="menu-item-container">
              <li className="nav-item">
                <a className="community-menu-item" href="#">
                  <span className="ml-2">
                    View All Members
                  </span>
                </a>
              </li>
            </ul>
            <ul className="menu-item-container">
              { handleCommunityMembership() }
              <li className="sign-up">
                <a className="community-menu-item" href="#">
                    <div className="inline-flex mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="pl-1"> details </span> 
                    </div> 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
