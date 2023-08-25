import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ onSearch, setAccess }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    setAccess(false);
    navigate("/");
  };

  return (
    <div className={style.nav}>
      <NavLink to="/home">
        <button className={style.btnHome}>Home</button>
      </NavLink>

      <Link to="/about">
        <button className={style.btnHome}>About</button>
      </Link>
      <NavLink to="/favorites">
        <button className={style.btnHome}>Favorites</button>
      </NavLink>

      <button onClick={handleLogOut} className={style.btnHome}>
        Log Out
      </button>

      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
