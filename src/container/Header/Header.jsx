import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
const Header = () => {
  return (
    <section id="header" className="app__header app_flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋🏽</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text"> Bryan</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Webdeveloper</p>
            <p className="p-text">UX UI designer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
      </motion.div>
      <motion.div></motion.div>
      Header
    </section>
  );
};

export { Header };
