import React from "react";
import { BsCursor } from "react-icons/bs";
import { TbFloatNone } from "react-icons/tb";
import { SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <a
              target="_blank"
              href="http://soubryanh.bio.link/"
              className="p-text"
            >
              @2022 Bryan
            </a>
            <p className="p-text">All Rights Reserved </p>
          </div>
        </div>
      </div>
    );
  };

export { AppWrap };
