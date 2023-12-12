import React from "react";
import { useEffect } from "react";
import "./Nav.scss";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import {
  MdOutlineSpaceDashboard,
  MdChatBubbleOutline,
  MdClose,
} from "react-icons/md";

const Nav = () => {
  useEffect(() => {
    const nav = document.querySelector(".nav-toggle");
    const toggleNav = document.querySelector(".nav-toggle .toggle");
    const navIcons = document.querySelectorAll(".nav-toggle .nav-icon");

    navIcons[0].classList.add("active");

    navIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        navIcons.forEach((icon) => {
          icon.classList.remove("active");
        });

        icon.classList.add("active");
        setTimeout(() => {
          nav.classList.remove("active");
        }, 500);
      });
    });

    const toggleNavHandler = () => {
      nav.classList.toggle("active");
    };

    toggleNav.addEventListener("click", toggleNavHandler);

    return () => {
      toggleNav.removeEventListener("click", toggleNavHandler);
    };
  }, []);

  return (
    <div className="nav-toggle">
      <div className="toggle">
        <HiMenuAlt2 className="menu open" />
        <MdClose className="menu close" />
      </div>

      <a href="#home" className="nav-icon" style={{ "--r": 9 }}>
        <BiHomeCircle className="icon" />
      </a>

      <a href="#about" className="nav-icon" style={{ "--r": 6 }}>
        <BiUser className="icon" />
      </a>

      <a href="#projects" className="nav-icon" style={{ "--r": 3 }}>
        <MdOutlineSpaceDashboard className="icon" />
      </a>

      <a href="#contact" className="nav-icon" style={{ "--r": 0 }}>
        <MdChatBubbleOutline className="icon" />
      </a>
    </div>
  );
};

export default Nav;
