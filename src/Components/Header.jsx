import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import logo from "../../public/Imgs/cinephile-central-high-resolution-logo-transparent.png";

function Header() {
  return (
    <div className=" bg-[#121212]">
      <div className="container mx-auto px-6 py-2 text-white flex items-center justify-between">
        <Link to="/">
          <img className="max-w-[180px] sm:max-w-[250px]" src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-3 sm:text-xl">
          <i className="fa-solid fa-magnifying-glass hover:text-[#f3c531] duration-300 cursor-pointer"></i>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
