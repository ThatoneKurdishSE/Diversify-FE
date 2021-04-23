import React, { useEffect, useState } from "react";
import SearchBar from "material-ui-search-bar";

export default function Header({ logout }) {
  const handleClick = () => {
    logout();
  };

  return (
    <nav
      className="
        flex
        items-center
        justify-between
        flex-wrap
        bg-teal
        p-6
      ">
      <div
        className="
          flex
          items-center
          flex-no-shrink
          mr-6
        ">
        <span
          className="
            font-semibold
            text-xl
            tracking-tight
          ">
            Diversify
          </span>
      </div>
      <div
        className="
          w-full
          block
          flex-grow
          lg:flex
          lg:items-center
          lg:w-auto
        ">
          <button onClick={handleClick}>
            Logout
          </button>
        </div>
    </nav>
  );
}
