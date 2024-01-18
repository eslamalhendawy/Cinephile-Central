import { useState } from "react";
import Drawer from "@mui/material/SwipeableDrawer";

function SideMenu() {
  const [openMenu, setOpen] = useState(false);
  const toggleMenu = (openStatus) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(openStatus);
  };
  return (
    <div>
      <i className="fa-solid fa-bars hover:text-[#f3c531] duration-300 cursor-pointer" onClick={toggleMenu(true)}></i>
      <Drawer anchor="right" open={openMenu} onClose={toggleMenu(false)} onOpen={toggleMenu(true)}>
        <div className="w-screen h-full md:max-w-screen-sm flex flex-col p-3 relative bg-[#1f1f1f]">
          <div className="text-2xl text-white hover:text-[#f3c531] duration-300 mb-6">
            <i className="fa-solid fa-x" onClick={toggleMenu(false)}></i>
          </div>
          <div className="text-white flex items-center gap-2 text-xl hover:text-[#f3c531] duration-300 mb-3">
            <i className="fa-solid fa-home"></i>
            <p>Home Page</p>
          </div>
          <div className="text-white flex items-center gap-2 text-xl hover:text-[#f3c531] duration-300 mb-3">
            <i className="fa-solid fa-film"></i>
            <p>Movies</p>
          </div>
          <div className="text-white flex items-center gap-2 text-xl hover:text-[#f3c531] duration-300">
            <i className="fa-solid fa-tv"></i>
            <p>TV Shows</p>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
