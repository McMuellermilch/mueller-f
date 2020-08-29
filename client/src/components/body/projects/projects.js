import React, { useState, useEffect } from 'react';
import './projects.css';

import Project from './project/project';

const Projects = (props) => {
  return (
    <div className="projects">
      <div className="projects_box_heading">Projects</div>
      <div className="projects_box_body">
        {props.projectData.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.name}
              labelText={project.languages}
              descriptionShort={project.descriptionShort}
              descriptionLong={project.descriptionLong}
              tags={project.tags}
              gitHubLink={project.gitHubLink}
              skills={props.skillData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
