import React from "react";

function Footer() {
  return (
      <footer className="text-white py-8 py-4 px-4 sm:px-12">
        <div className="container mx-auto flex flex-col sm:flex-row justify-around">
          <div className="mb-4 sm:mb-0">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Cinephile Central</h2>
              <p className="text-sm">Your ultimate destination <br></br> for movie and tv show info.</p>
            </div>
          </div>
          <div className="">
            <ul className="text-center md:text-left">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white duration-200">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white duration-200">
                  Movies
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white duration-200">
                  TV Shows
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center">
            <p className="mb-2 text-xl">My Links:</p>
            <ul className="flex justify-center space-x-2">
              <li className="inline-block">
                <a href="https://github.com/eslamalhendawy" className="text-gray-400 hover:text-white duration-200">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li className="inline-block">
                <a href="https://www.linkedin.com/in/eslam-alhendawy/" className="text-gray-400 hover:text-white duration-200">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
