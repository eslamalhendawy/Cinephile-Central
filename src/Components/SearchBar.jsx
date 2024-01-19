import { useState } from "react";
import Drawer from "@mui/material/SwipeableDrawer";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [openMenu, setOpen] = useState(false);
  const toggleMenu = (openStatus) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(openStatus);
  };
  return (
    <div>
      <i onClick={toggleMenu(true)} className="fa-solid fa-magnifying-glass hover:text-[#f3c531] duration-300 cursor-pointer text-xl"></i>
      <Drawer anchor="top" open={openMenu} onClose={toggleMenu(false)} onOpen={toggleMenu(true)}>
        <div className="bg-[#1f1f1f] flex items-center px-4">
          <select className="bg-[#1f1f1f] border-[#1f1f1f] text-white focus:outline-none text-sm sm:text-lg" name="" id="">
            <option className="border-[#1f1f1f]" defaultValue={true} value="movies">Movies</option>
            <option className="border-[#1f1f1f]" value="tv">TV Shows</option>
          </select>
          <input onChange={(e) => setQuery(e.target.value)} className="block w-full bg-[#1f1f1f] py-3 sm:py-4 px-1 focus:outline-none focus:placeholder:opacity-0 placeholder:text-[#70756a] placeholder:duration-300 text-white text-sm sm:text-lg" type="text" placeholder="Search Cinephile Central" />
          <div className="flex items-center gap-2 sm:gap-4">
            <i className="fa-solid fa-magnifying-glass text-white hover:text-[#f3c531] duration-300 text-sm sm:text-lg"></i>
            <i onClick={toggleMenu(false)} className="fa-solid fa-x text-white hover:text-[#f3c531] duration-300 text-sm sm:text-lg"></i>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default SearchBar;
