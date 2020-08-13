import React, { useState, useEffect } from 'react';
import './ManagementSkills.css';
import axios from 'axios';

import { Table, Button, Modal, Label } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

import ViewSkillModal from './ViewSkillModal/ViewSkillModal';

const skillsEndpoint = 'http://localhost:5000/api/skills';

const ManagementSkills = () => {
  const [skills, setSkills] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [skill, setSkill] = useState({
    id: '',
    name: '',
    level: '',
  });

  const fetchProjectData = () => {
    axios.get(skillsEndpoint).then((response) => {
      console.log(response);
      const skillsData = response.data.map((skill, index) => {
        return {
          index: index,
          id: skill._id,
          name: skill.name,
          level: skill.level,
        };
      });
      setSkills(skillsData);
    });
  };

  useEffect(() => {
    if (skills.length == 0) {
      fetchProjectData();
    }
  });

  const openModal = (id) => {
    const skill = skills.find((element) => element.id == id);
    setSkill({
      id: skill.id,
      name: skill.name,
      level: skill.level,
    });
    setVisible(true);
  };

  return (
    <div className="management_skills">
      <div className="management_skills_heading">
        <div className="management_skills_title">Skills</div>
      </div>
      <div className="management_skills_body">
        <ViewSkillModal />
        <Table selectable celled size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Level</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {skills.map((skill) => {
              return (
                <Table.Row>
                  <Table.Cell collapsing>
                    <Button circular color="blue" icon="edit outline" />
                  </Table.Cell>
                  <Table.Cell>{skill.name}</Table.Cell>
                  <Table.Cell>{skill.level}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManagementSkills;
