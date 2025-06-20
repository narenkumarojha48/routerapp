import { NavLink} from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav className="navcontainer">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5229/5229550.png" width={30}  height={30} alt="image"/>
        </div>
        <div>
          <button className="navitem">
            <NavLink to="/">Home</NavLink>
          </button>
          <button className="navitem">
            <NavLink to="/about">About</NavLink>
          </button>
          <button className="navitem">
            <NavLink to="/users">User info</NavLink>
          </button>
          <button className="navitem">
            <NavLink to="/search">Search</NavLink>
          </button>
        </div>
      </nav>
    </>
  );
}
