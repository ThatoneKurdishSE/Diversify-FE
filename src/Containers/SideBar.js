import React, { useState, useEffect } from "react";
import CommunitiesListItem from "../Components/CommunitiesListItem";
import SearchBar from "../Components/SearchBar";

export default function SideBar({
  userCommunities,
  communities,
  setUserCommunities,
  setCommunity,
  setCommunities,
  setNavbarOpen,
}) {
  const [isToggled, setIsToggled] = useState(false);

  const [filteredCommunities, setFilteredCommunities] = useState([]);

  useEffect(() => setFilteredCommunities(communities), [communities]);

  const filterCommunities = (event) => {
    setFilteredCommunities(
      communities.filter((community) => {
        return community.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  const mapCommunities = (communityArray) =>
    communityArray.map((community) => {
      return (
        <CommunitiesListItem
          key={community.id}
          community={community}
          setCommunity={setCommunity}
          setNavbarOpen={setNavbarOpen}
        />
      );
    });

  let communityList = mapCommunities(filteredCommunities);
  let userCommunityList = mapCommunities(userCommunities);

  let toggle = (e) => {
    e.preventDefault();
    setIsToggled(!isToggled);
  };

  return (
    <div className="side-bar">
      <div className="sb-container">
        <button onClick={toggle} className="sb-title">
          {isToggled ? "My Communities" : "Communities"}
        </button>
      </div>
      <SearchBar
        className="sb-container"
        filterCommunities={filterCommunities}
      />
      {isToggled ? userCommunityList : communityList}
      <div className="flex items-center mt-3 justify-center">
        <button className="btn-blue m-3">Create new community</button>
      </div>
    </div>
  );
}
