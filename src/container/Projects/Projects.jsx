import React from "react";
import { AiFillEye, AiFillGithub, AiFillIdcard } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Projects.scss";
import { TbUserX } from "react-icons/tb";

const Projects = () => {
  const [filter, setFilter] = React.useState("All");
  const handleWorkFilter = (item) => {
    setFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 });
  const [works, setWorks] = React.useState([]);
  const [filterWork, setFilterWork] = React.useState([]);

  React.useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);
  return (
    <section id="projects">
      <h2 className="head-text">
        My Creative
        <span> Portfolio </span>
        section
      </h2>
      <div className="app__work-filter">
        {["UI/ UX", "TbUserX", "web app", "mobile App", "ReactJS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                filter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferre">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.projectLink} target="_blank" rel="noreferre">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text"> {work.title} </h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {" "}
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]} </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(Projects, "app__works");

// export { Projects };
