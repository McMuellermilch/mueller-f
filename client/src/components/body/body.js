import React, { useState, useEffect } from 'react';
import './body.css';
import axios from 'axios';

import Skills from './skills/skills';
import Projects from './projects/projects';

const Body = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSKills] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects').then((response) => {
      console.log(response);
      let responseProjects = response.data.map((project) => {
        return project;
      });
      setProjects(responseProjects);
    });
  }, []);

  return (
    <div className="body">
      <Skills />
      <Projects projectData={projects} />
    </div>
  );
};

export default Body;
