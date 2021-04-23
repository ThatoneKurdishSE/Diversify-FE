import React, { useEffect, useState} from "react";

export default function SearchBar( props ) {

  return (
    <div
      className="
        sb-container
        text-sm
        sm:flex
        flex-col
      "
    >
      <label htmlFor="search">Search for a community</label>
      <input className="border border-black border-solid m-2" type="text" name="search" id="search" onChange={props.filterCommunities}/>
    </div>
  );
}
