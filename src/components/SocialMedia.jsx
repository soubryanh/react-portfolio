import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/soubryanh" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/bryanhernandz/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/soubryanh" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/soubryanh/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export { SocialMedia };
