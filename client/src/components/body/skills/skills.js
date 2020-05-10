import React from 'react';
import './skills.css';

import Skill from './skill/skill';

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills_box_heading">Skills</div>
      <div className="skills_box_body">
        <Skill value="75" text="React" color="#448AFF" />
        <Skill value="50" text="Java" color="#8BC34A" />
        <Skill value="25" text="Flutter" color="#FBC02D" />
        <Skill value="40" text="Golang" color="#E64A19" />
        <Skill value="30" text="Python" color="#00BCD4" />
      </div>
    </div>
  );
};

export default Skills;
