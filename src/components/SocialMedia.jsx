import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsGithub />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export { SocialMedia };
