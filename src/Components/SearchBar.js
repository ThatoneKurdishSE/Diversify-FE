import React, { useEffect, useState} from "react";

export default function SearchBar( props ) {

  return (
    <div
      className="
        text-sm
        lg:flex-grow
      "
    >
      <label htmlFor="search">Search for a community</label>
      <input type="text" name="serach" id="search" onChange={props.filterCommunities}/>
    </div>
  );
}
