import React from 'react';
import './body.css';

import Skills from './skills/skills';
import Projects from './projects/projects';

const Body = () => {
  return (
    <div className="body">
      <Skills />
      <Projects />
    </div>
  );
};

export default Body;
