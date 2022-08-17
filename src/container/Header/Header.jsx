import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <section id="#home" className="app__header app_flex">
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
          <p className="p-text">Web developer</p>
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
      <motion.img
        whileInView={{
          scale: [0, 1],
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="overlay_circle"
        src={images.circle}
        alt="profile_circle"
      />
    </motion.div>
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.git, images.react, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile-bg" />
        </div>
      ))}
    </motion.div>
  </section>
);

// export { Header };
export default AppWrap(Header, "header");
