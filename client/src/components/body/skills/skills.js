import React, { useState, useEffect } from 'react';
import './skills.css';

import Skill from './skill/skill';

const Skills = (props) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (skills.length == 0 && props.skillData.length != 0) {
      setSkills(
        props.skillData.map((skill, index) => {
          return (
            <Skill
              key={index}
              value={skill.level}
              text={skill.name}
              color={skill.color}
            />
          );
        })
      );
    }
  });

  return (
    <div className="skills">
      <div className="skills_box_heading">Kennt·nis·se</div>
      <div className="skills_box_body">{skills}</div>
      <div className="skills_box_footnote">Selbsteinschätzung meines Kenntnisstandes auf einer Skala von 0 bis 100%</div>
    </div>
  );
};

export default Skills;
