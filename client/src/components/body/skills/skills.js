import React, { useState, useEffect } from 'react';
import './skills.css';

import Skill from './skill/skill';

const Skills = (props) => {
  const [skills, setSkills] = useState([]);

  const colors = {
    JS: '#2185D0',
    Java: '#A5673F',
    Golang: '#00B5AD',
    Python: '#A333C9',
    VBA: '#21BA45',
    Flutter: '#DB2829',
  };

  useEffect(() => {
    if (skills.length == 0 && props.skillData.length != 0) {
      console.log(props.skillData);
      setSkills(
        props.skillData.map((skill) => {
          return (
            <Skill
              value={skill.level}
              text={skill.name}
              color={colors[skill.name]}
            />
          );
        })
      );
    }
  });

  return (
    <div className="skills">
      <div className="skills_box_heading">Skills</div>
      <div className="skills_box_body">{skills}</div>
    </div>
  );
};

export default Skills;
