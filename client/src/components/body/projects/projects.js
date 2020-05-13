import React, { useState, useEffect } from 'react';
import './projects.css';

import Project from './project/project';

const Projects = (props) => {
  const [projects, setProjects] = useState([]);
  const colors = {
    JavaScript: 'blue',
    Java: 'brown',
    Golang: 'teal',
    Python: 'purple',
    VisualBasic: 'green',
    Flutter: 'red',
  };

  useEffect(() => {
    if (projects.length == 0 && props.projectData.length != 0) {
      console.log(props.projectData);
      setProjects(
        props.projectData.map((project) => {
          return (
            <Project
              title={project.name}
              labelColor={colors[project.language]}
              labelText={project.language}
              description={project.description}
            />
          );
        })
      );
    }
  });

  return (
    <div className="projects">
      <div className="projects_box_heading">Projects</div>
      <div className="projects_box_body">{projects}</div>
    </div>
  );
};

export default Projects;
