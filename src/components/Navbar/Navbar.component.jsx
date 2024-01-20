import React, { useEffect, useState } from "react";
import { S } from "./Navbar.styled";
import Hamburger from "hamburger-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      if (window.innerWidth > 984) {
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
            <h4>Benjamin | Fullstack Developer</h4>
            <S.SocialMediaIcons>
              <FaGithub size={30} />
              <FaLinkedin size={30} />
            </S.SocialMediaIcons>
          </S.NavHeader>

          <S.HamburgerMenuIcon>
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={30}
              color="var(--White)"
            />
          </S.HamburgerMenuIcon>
        </S.NavHeaderWrapper>

        <S.NavLinksWrapper>
          <S.NavLink href="">Projects</S.NavLink>
          <S.NavLink href="">Work & Education</S.NavLink>
          <S.NavLink href="">About</S.NavLink>
          <S.NavLink href="">Contact</S.NavLink>
          <S.NavLink href=""> Download CV </S.NavLink>
        </S.NavLinksWrapper>
      </S.MainNav>
      {isOpen && (
        <S.HamburgerMenuWrapper>
          <S.HamburgerMenu>
            <S.NavLink href="">Projects</S.NavLink>
            <S.NavLink href="">Work & Education</S.NavLink>
            <S.NavLink href="">About</S.NavLink>
            <S.NavLink href="">Contact</S.NavLink>
            <S.NavLink href="">Download CV</S.NavLink>
          </S.HamburgerMenu>
        </S.HamburgerMenuWrapper>
      )}
    </S.MainNavWrapper>
  );
}

export default Navbar;
