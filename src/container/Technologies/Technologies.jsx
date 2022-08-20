import React from "react";
import "./Technologies.scss";
import { motion } from "framer-motion";
// import ReactToolTip from "react-tooltip";
// import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
// import { GiSkills } from "react-icons/gi";

const Technologies = () => {
  const [experiences, setExperience] = React.useState([]);
  const [skills, setSkills] = React.useState([]);
  React.useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <section id="technologies">
      <h2 className="head-text">Skill & Expiences</h2>
      <div className="app__skill-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
                <p className="p-text">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Technologies };
