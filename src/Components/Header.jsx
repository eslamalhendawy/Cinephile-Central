import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import SearchBar from "./SearchBar";
import logo from "../../public/Imgs/cinephile-central-high-resolution-logo-transparent.png";

function Header() {
  return (
    <div className=" bg-[#121212]">
      <div className="container mx-auto px-3 md:px-6 py-2 text-white flex items-center justify-between">
        <Link to="/">
          <img className="max-w-[180px] sm:max-w-[250px]" src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-4 sm:text-xl">
          <SearchBar />
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
