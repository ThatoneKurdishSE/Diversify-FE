import React from "react";
import SearchBar from "material-ui-search-bar";
import { Link } from 'react-router-dom'

export default function Header({ logout }) {

  const handleClick = () => {
    console.log("hit")
    logout();
  }

  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink mr-6">
        <span class="font-semibold text-xl tracking-tight">Diversify</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            class="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <SearchBar
            // value={this.state.value}
            // onChange={(newValue) => this.setState({ value: newValue })}
            // onRequestSearch={() => doSomethingWith(this.state.value)}
          />
        </div>
        <div>
          <button onClick={handleClick}>Logout</button>
          {/* <Link to="/">Logout</Link> */}
        </div>
      </div>
    </nav>
  );
}
