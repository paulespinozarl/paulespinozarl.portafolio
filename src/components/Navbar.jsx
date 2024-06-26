import { useMediaQuery } from "@react-hook/media-query";
import { IoDownloadOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { avatar, cvpaul } from "../../public/index";
import Button from "./Button";
import SideBar from "./SideBar";
import { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const isLargeScreen = useMediaQuery("(min-width: 864px)");
  const isShortScreen = useMediaQuery("(max-width: 864px)");
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsActive(false);
    setShowMenu(false);
  };

  return (
    <div className="flex fixed top-0 shadow-md w-screen z-50 bg-transparent backdrop-blur-md">
      <nav
        className={`h-16 flex justify-between w-screen text-gray-950 ${
          showMenu ? "hidden" : "flex"
        }`}
      >
        <div className="text-xl md:text-2xl font-bold max-w-4xl flex items-center">
          <Link
            spy={true}
            smooth={true}
            duration={1000}
            to="sobre-mi"
            offset={-64}
            onClick={handleLinkClick}
            className="ml-10 text-xl lg:text-2xl"
          >
            <img
              className="h-16 md:h-20 top-5 image absolute"
              src={avatar}
              alt="avatar"
            />
          </Link>
        </div>
        {isLargeScreen && (
          <span className="flex items-center mr-10">
            <a
              href="https://www.linkedin.com/in/paulespinozarl/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125 mr-5"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/paulespinozarl"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125 mr-5"
            >
              <FaGithub size={30} />
            </a>
            <a
              href={cvpaul}
              download="cv-paulespinoza.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125"
            >
              <IoDownloadOutline size={30} />
            </a>
          </span>
        )}
      </nav>
      {isShortScreen && (
        <div className={`${isActive ? "w-screen" : ""}`}>
          <Button isActive={isActive} toggleActive={toggleActive} />
          <div className={`${isActive ? "" : "hidden"}`}>
            <SideBar handleLinkClick={handleLinkClick} />
          </div>
        </div>
      )}
    </div>
  );
};
