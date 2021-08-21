import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/techniques">techniques</NavLink>
    </nav>
  );
}
