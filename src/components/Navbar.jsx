import NavItem from "./NavItem";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex items-start px-4 py-4 bg-slate-700">
      <ul className="flex space-x-4 text-white">
        <div className="px-8">
          <Logo />
        </div>
        <NavItem destination={"/"}>Home</NavItem>
        <NavItem destination={"/contact"}>Contact Me</NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
