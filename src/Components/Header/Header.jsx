import { useState, useRef } from "react";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const menu = useRef(null);

  const toggleMenu = () => {
    if (menuVisible) {
      setMenuVisible(false);
      menu.current.classList.remove("top-[60px]");
      menu.current.classList.remove("opacity-100");
    } else {
      setMenuVisible(true);
      menu.current.classList.add("top-[60px]");
      menu.current.classList.add("opacity-100");
    }
  };

  return (
    <>
      <nav className="py-4 px-4 sm:px-12 sm:flex sm:items-center sm:justify-between container mx-auto">
        <div className="flex justify-between items-center w-full sm-w-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-white md:text-4xl lg:text-5xl">Cinephile Central</h1>
          <span className="text-3xl cursor-pointer mx-2 sm:hidden block" onClick={toggleMenu}>
            <i className={`fa-solid text-gray-400 hover:text-white duration-200 ${menuVisible ? "fa-x" : "fa-bars "}`}></i>
          </span>
        </div>

        <ul ref={menu} className="sm:flex sm:space-x-6 sm:items-center z-[2] sm:z-auto sm:static absolute bg-[#020d18] sm:bg-transparent sm:text-white w-full left-0 sm:w-auto sm:py-0 py-4 sm:pl-0 pl-4 sm:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300">
          <li className="text-lg text-gray-400 hover:text-white duration-200">Home</li>
          <li className="text-lg text-gray-400 hover:text-white duration-200">Movies</li>
          <li className="text-lg text-gray-400 hover:text-white duration-200  whitespace-nowrap">TV Shows</li>
        </ul>
      </nav>
      <div className="container mx-auto px-4 sm:px-12 mt-4 ">
        <div className="bg-[#233a50] border-2 sm:border-4 border-black flex rounded-xl">
          <select name="" id="" className="p-1 sm:p-3 bg-[#233a50] focus:outline-none border-r-2 border-black text-white rounded-l-xl">
            <option defaultValue className="p-1 sm:p-3" value="movie">Movie</option>
            <option className="p-1 sm:p-3" value="tv">TV Show</option>
          </select>
          <input className="placeholder:text-white text-xs sm:text-lg focus:placeholder:opacity-0 placeholder:duration-300 p-1 sm:p-3 block w-full text-white bg-[#233a50] focus:outline-none rounded-r-xl" type="text" placeholder="Search for a movie or tv show..." />
        </div>
      </div>
    </>
  );
}
export default Header;
