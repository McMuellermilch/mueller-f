import React, { useState, useEffect } from 'react';
import './body.css';
import axios from 'axios';

import Skills from './skills/skills';
import Projects from './projects/projects';

const Body = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('api/projects').then((response) => {
      let responseProjects = response.data.map((project) => {
        return project;
      });
      setProjects(responseProjects);
    });
    axios.get('api/skills').then((response) => {
      let responseSkills = response.data.map((skill) => {
        return skill;
      });
      setSkills(responseSkills);
    });
  }, []);

  return (
    <div className="body">
      <Skills skillData={skills} />
      <Projects projectData={projects} />
    </div>
  );
};

export default Body;
