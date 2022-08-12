import React from "react";
import "./Navbar.scss";
import { GiMeditation } from "react-icons/gi";
import { GiTreehouse } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import { GiTalk } from "react-icons/gi";
import { TbTools } from "react-icons/tb";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = React.useState("#");
  const [activeSpan, setActiveSpan] = React.useState("");

  return (
    <nav>
      <div className="social__content">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <GiTreehouse />
        </a>
        <span className="social__tooltip social__tooltip-top">Home</span>
      </div>
      <div className="social__content">
        <a
          href="#about"
          className={activeNav === "#about" ? "active" : ""}
          onClick={() => setActiveNav("#about")}
        >
          <GiMeditation />
        </a>
        <span className="social__tooltip social__tooltip-top">About</span>
      </div>
      <div className="social__content">
        <a
          href="#projects"
          className={activeNav === "#projects" ? "active" : ""}
          onClick={() => setActiveNav("#projects")}
        >
          <RiPlantFill />
        </a>
        <span className="social__tooltip social__tooltip-top">Projects</span>
      </div>
      <div className="social__content">
        <a
          href="#technologies"
          className={activeNav === "#technologies" ? "active" : ""}
          onClick={() => setActiveNav("#technologies")}
        >
          <TbTools />
        </a>
        <span className="social__tooltip social__tooltip-top">Techtools</span>
      </div>
      <div className="social__content">
        <a
          href="#contact"
          className={activeNav === "#contact" ? "active" : ""}
          onClick={() => setActiveNav("#contact")}
        >
          <GiTalk />
        </a>
        <span className="social__tooltip social__tooltip-top">Let's talk!</span>
      </div>
    </nav>
  );
};

export { Navbar };
