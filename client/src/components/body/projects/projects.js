import React, { useState, useEffect } from 'react';
import './projects.css';

import Project from './project/project';

const Projects = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (projects.length == 0 && props.projectData.length != 0) {
      console.log(props.projectData);
      setProjects(
        props.projectData.map((project) => {
          return (
            <Project
              title={project.name}
              labelText={project.languages}
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
