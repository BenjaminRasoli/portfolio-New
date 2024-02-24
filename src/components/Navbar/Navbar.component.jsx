import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks } from "../../constans";
import { S } from "./Navbar.styled";
// import cv from "../../assets/cv.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScrollLock = () => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };
    handleScrollLock();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1499) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <S.MainNavWrapper>
      <S.MainNav>
        <S.NavHeaderWrapper>
          <S.NavHeader>
            <h5>Benjamin | Fullstack Developer</h5>
            <S.SocialMediaIcons>
              <a href="https://github.com/BenjaminRasoli" target="_blank">
                <FaGithub size={30} />
              </a>
              <a href="https://github.com/BenjaminRasoli" target="_blank">
                <FaLinkedin size={30} />
              </a>
            </S.SocialMediaIcons>
          </S.NavHeader>

          <S.HamburgerMenuIcon>
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={30}
              color="var(--Teal)"
            />
          </S.HamburgerMenuIcon>
        </S.NavHeaderWrapper>

        <S.NavLinksWrapper>
          {navLinks.map((nav) => (
            <S.NavLink
              //href={`${nav.id === "CV" ? cv : "#" + nav.id}`}
              href={`${"#" + nav.id}`}
              // download={nav.id === "CV" && cv}
              key={nav.id}
            >
              {nav.title}
            </S.NavLink>
          ))}
        </S.NavLinksWrapper>
      </S.MainNav>
      {isOpen && (
        <S.HamburgerMenuWrapper>
          <S.HamburgerMenu>
            {navLinks.map((nav) => (
              <S.NavLink
                onClick={() => setIsOpen(false)}
                //href={`${nav.id === "CV" ? cv : "#" + nav.id}`}
                href={`${"#" + nav.id}`}
                // download={nav.id === "CV" && cv}
                key={nav.id}
              >
                {nav.title}
              </S.NavLink>
            ))}
          </S.HamburgerMenu>
        </S.HamburgerMenuWrapper>
      )}
    </S.MainNavWrapper>
  );
}

export default Navbar;
