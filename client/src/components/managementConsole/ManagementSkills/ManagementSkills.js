import React, { useState, useEffect } from 'react';
import './ManagementSkills.css';

import { Table, Button, Modal, Label } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const skillsEndpoint = 'http://localhost:5000/api/sills';

const ManagementSkills = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState([]);

  return (
    <div className="management_skills">
      <div className="management_skills_heading">
        <div className="management_skills_title">Skills</div>
      </div>
      <div className="management_skills_body">body here</div>
    </div>
  );
};

export default ManagementSkills;
