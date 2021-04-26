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
        border-b-2
        border-blue-200
        shadow
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
          lg:items-end
          lg:w-auto
          justify-end 
        ">
          <button className="content-end justify-end align-end" onClick={handleClick}>
            Logout
          </button>
        </div>
    </nav>
  );
}
