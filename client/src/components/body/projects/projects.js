import React, { useState, useEffect } from 'react';
import './projects.css';

import Project from './project/project';

const Projects = (props) => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (projects.length == 0 && props.projectData.length != 0) {
      setProjects(
        props.projectData.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.name}
              labelText={project.languages}
              lableColor="#ff6b6b"
              descriptionShort={project.descriptionShort}
              descriptionLong={project.descriptionLong}
              tags={project.tags}
              gitHubLink={project.gitHubLink}
            />
          );
        })
      );
    }
    if (skills.length == 0 && props.skillData.length != 0) {
      setSkills(
        props.skillData.map((skill, index) => {
          return {
            index: index,
            name: skill.name,
            color: skill.color,
          };
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
