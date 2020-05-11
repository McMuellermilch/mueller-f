import React from 'react';
import './projects.css';

import Project from './project/project';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects_box_heading">Projects</div>
      <div className="projects_box_body">
        <Project
          title="Jira Reports"
          labelColor="blue"
          labelText="Javascript"
          description="A fullstack web app to generate reports from Jira data"
        />
        <Project
          title="karlmueller-asia.com"
          labelColor="blue"
          labelText="Javascript"
          description="The web presence for Karl Mueller Asia Inc."
        />
        <Project
          title="PDF Uploader"
          labelColor="blue"
          labelText="Golang"
          description="A small tool to upload and archive a PDF file"
        />
        <Project
          title="Mail Merge Automation"
          labelColor="blue"
          labelText="Visual Basic"
          description="Automation of printing and archiving employee letters"
        />
        <Project
          title="Workplace Automation"
          labelColor="blue"
          labelText="Python"
          description="Small automations at the workplace"
        />
        <Project
          title="Teaminfo App"
          labelColor="blue"
          labelText="Javascript"
          description="A fullstack web app to manage all necessary infos for teams"
        />
        <Project
          title="Link List"
          labelColor="blue"
          labelText="Javascript"
          description="A small and fast website displaying all links to company internal infrastructure"
        />
      </div>
    </div>
  );
};

export default Projects;
