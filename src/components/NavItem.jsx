import { Link } from "react-router-dom";

const NavItem = ({ destination, children }) => {
  return (
    <li className="px-3 py-2 relative group text-lg">
      <span>
        <Link to={destination}>{children}</Link>
      </span>
      <span className="absolute left-1/2 bottom-3 w-0 h-0.5 bg-blue-500 transform group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
    </li>
  );
};

export default NavItem;
