import { Link } from "react-router-dom";
import "./main.css";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white flex align-middle justify-between px-20 py-5">
      <div className="title text-2xl font-bold">NovaTechLabs</div>
      <ul className=" flex align-middle">
        <li className="pl-3 text-[18px] font-semibold">
          <Link to="/events">Events</Link>
        </li>
        <li className="pl-3 text-[18px] font-semibold">
          <Link to="/reservations">Reservations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
