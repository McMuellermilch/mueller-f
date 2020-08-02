import React, { useState, useEffect } from 'react';
import './AddProjectModal.css';
import axios from 'axios';

import { Form, Button, Modal } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

const AddProjectModal = (props) => {
  const [name, setName] = useState('');
  const [languages, setLanguages] = useState([]);
  const [tags, setTags] = useState([]);
  const [descriptionShort, setDescriptionShort] = useState('');
  const [descriptionLong, setDescriptionLong] = useState('');
  const [gitHubLink, setGitHubLink] = useState('');

  const projectsEndpoint = 'http://localhost:5000/api/projects';

  useEffect(() => {
    console.log(gitHubLink);
    console.log(languages);
  });

  const resetModal = () => {
    setName('');
    setLanguages([]);
    setTags([]);
    setDescriptionShort('');
    setDescriptionLong('');
    setGitHubLink('');
  };

  const handleSubmit = () => {
    let data = {
      name: name,
      languages: languages,
      descriptionShort: descriptionShort,
      descriptionLong: descriptionLong,
      tags: tags,
      gitHubLink: gitHubLink,
    };
    console.log(data);
    axios.post(projectsEndpoint, data).then((response) => {
      if (response.status == 200) {
        props.setVisible(false);
        setTimeout(() => {
          toast({
            type: 'success',
            title: 'Projekt hinzugefügt! :)',
            description: 'Das Projekt wurde erfolgreich gespeichert',
          });
        }, 4000);
        props.update();
        resetModal();
      }
    });
  };

  return (
    <>
      <SemanticToastContainer />
      <Modal open={props.visible} onClose={() => props.setVisible(false)}>
        <Modal.Header>Neues Projekt hinzufügen</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Sprachen"
                placeholder="Sprachen"
                onChange={(e) => setLanguages(e.target.value.split(', '))}
              />
              <Form.Input
                fluid
                label="Tags"
                placeholder="Tags"
                onChange={(e) => setTags(e.target.value.split(', '))}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Kurze Beschreibung"
                placeholder="Kurze Beschreibung"
                onChange={(e) => setDescriptionShort(e.target.value)}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="GitHub Link"
                placeholder="GitHub Link"
                onChange={(e) => setGitHubLink(e.target.value)}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.TextArea
                fluid
                label="Beschreibung"
                placeholder="Beschreibung"
                onChange={(e) => setDescriptionLong(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => props.setVisible(false)} negative>
            Abbrechen
          </Button>
          <Button onClick={handleSubmit} positive>
            Speichern
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default AddProjectModal;
