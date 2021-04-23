import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import NavBar from "../Components/NavBar";
import ChatBox from "../Components/ChatBox";
import CommunityPosts from "../Containers/CommunityPosts";

export default function MainPage({
  userCommunities,
  currentUser,
  posts,
  location,
  addPost,
  communities,
  setCommunities,
  addCommunity
}) {
  const [community, setCommunity] = useState(null);

  return (
    <div className="main-page-container">
      <SideBar
        communities={communities}
        setCommunities={setCommunities}
        userCommunities={userCommunities}
        setCommunity={setCommunity}
        addCommunity={addCommunity}
      />
      <div className="post-container">
        <NavBar community={community} />
        {community ? (
          <CommunityPosts posts={posts} community={community} />
        ) : null}
        {community ? (
          <ChatBox
            community={community}
            currentUser={currentUser}
            location={location}
            addPost={addPost}
          />
        ) : null}
      </div>
    </div>
  );
}
