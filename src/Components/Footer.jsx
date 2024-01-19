import { Link } from "react-router-dom";

import logo from "../../public/Imgs/cinephile-central-high-resolution-logo-transparent.png";
function Footer() {
  return (
    <div className="bg-[#000000]">
      <div className="container mx-auto px-6 py-2">
        <div className="text-white text-center text-xl sm:text-2xl mb-3">
          <a href="https://www.linkedin.com/in/eslam-alhendawy/">
            <i className="fa-brands fa-linkedin mr-3 text-white hover:text-[#f3c531] duration-300 cursor-pointer"></i>
          </a>
          <a href="https://www.instagram.com/eslam_alhendawy/">
            <i className="fa-brands fa-instagram mr-3 text-white hover:text-[#f3c531] duration-300 cursor-pointer"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100007914375078">
            <i className="fa-brands fa-facebook-f text-white hover:text-[#f3c531] duration-300 cursor-pointer"></i>
          </a>
        </div>
        <ul className="flex flex-col sm:flex-row gap-3 sm:justify-center items-center mb-3">
          <li className="text-white font-semibold sm:text-lg text-center hover:text-[#f3c531] duration-300 ">Home Page</li>
          <li className="text-white font-semibold sm:text-lg text-center hover:text-[#f3c531] duration-300">Movies</li>
          <li className="text-white font-semibold sm:text-lg text-center hover:text-[#f3c531] duration-300">TV Shows</li>
        </ul>
        <div className="flex justify-center">
        <Link to="/">
          <img className="max-w-[150px] sm:max-w-[250px]" src={logo} alt="" />
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
