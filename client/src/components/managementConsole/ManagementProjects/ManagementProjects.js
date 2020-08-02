import React, { useState, useEffect } from 'react';
import './ManagementProjects.css';
import axios from 'axios';

import { Table, Button, Modal, Card } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

import AddProjectModal from './AddProjectModal/AddProjectModal';
import ViewProjectModal from './ViewProjectModal/ViewProjectModal';

const projectsEndpoint = 'http://localhost:5000/api/projects';

const ManagementProjects = () => {
  const [projects, setProjects] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [project, setProject] = useState({
    id: '',
    name: '',
    languages: [],
    descriptionShort: '',
    descriptionLong: '',
    tags: [],
  });

  const fetchProjectData = () => {
    axios.get(projectsEndpoint).then((response) => {
      const projectData = response.data.map((message, index) => {
        return {
          index: index,
          id: message._id,
          name: message.name,
          languages: message.languages,
          descriptionShort: message.descriptionShort,
          descriptionLong: message.descriptionLong,
          tags: message.tags,
        };
      });
      setProjects(projectData);
    });
  };

  useEffect(() => {
    if (projects.length == 0) {
      fetchProjectData();
    }
  });

  const openModal = (id) => {
    const project = projects.find((element) => element.id == id);
    setProject({
      id: project.id,
      name: project.name,
      languages: project.languages,
      descriptionShort: project.descriptionShort,
      descriptionLong: project.descriptionLong,
      tags: project.tags,
    });
    setVisible(true);
  };

  return (
    <div className="management_projects">
      <div className="management_projects_heading">
        <div className="management_projects_title">Projects</div>
        <div className="management_projects_add">
          <Button
            circular
            color="blue"
            icon="plus"
            onClick={() => setVisibleAdd(true)}
          />
          <AddProjectModal
            visible={visibleAdd}
            setVisible={setVisibleAdd}
            update={fetchProjectData}
          />
        </div>
      </div>

      <div className="management_projects_body">
        <ViewProjectModal
          visible={visible}
          project={project}
          setVisible={setVisible}
          update={fetchProjectData}
        />
        <Table selectable celled size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Kurzbeschreibung</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {projects.map((project) => {
              return (
                <Table.Row>
                  <Table.Cell collapsing>
                    <Button
                      circular
                      color="blue"
                      icon="edit outline"
                      onClick={() => openModal(project.id)}
                    />
                  </Table.Cell>
                  <Table.Cell>{project.name}</Table.Cell>
                  <Table.Cell>{project.descriptionShort}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManagementProjects;
