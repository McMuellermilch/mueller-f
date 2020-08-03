import React, { useState, useEffect } from 'react';
import './ViewProjectModal.css';
import axios from 'axios';

import { Form, Button, Modal } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

const ViewProjectModal = (props) => {
  const [name, setName] = useState('');
  const [languagesString, setLanguagesString] = useState(''); // String represention of array in order to be placed inside the Input field
  const [tagsString, setTagsString] = useState(''); // String represention of array in order to be placed inside the Input field
  const [descriptionShort, setDescriptionShort] = useState('');
  const [descriptionLong, setDescriptionLong] = useState('');
  const [gitHubLink, setGitHubLink] = useState('');

  const projectsEndpoint = 'http://localhost:5000/api/projects';

  useEffect(() => {
    setName(props.project.name);
    setLanguagesString(props.project.languages.join(', '));
    setTagsString(props.project.tags.join(', '));
    setDescriptionShort(props.project.descriptionShort);
    setDescriptionLong(props.project.descriptionLong);
    setGitHubLink(props.project.gitHubLink);
  }, [props]);

  const resetModal = () => {
    setName('');
    setLanguagesString('');
    setTagsString('');
    setDescriptionShort('');
    setDescriptionLong('');
    setGitHubLink('');
  };

  const handleDelete = () => {
    axios.delete(projectsEndpoint + '/' + props.project.id).then((response) => {
      if (response.status == 200) {
        props.setVisible(false);
        setTimeout(() => {
          toast({
            type: 'success',
            title: 'Projekt gelöscht! :)',
            description: 'Das Projekt wurde erfolgreich gelöscht',
          });
        }, 4000);
        props.update();
      }
    });
  };

  const handleSave = () => {
    let data = {
      name: name,
      languages: languagesString.split(', '),
      tags: tagsString.split(', '),
      descriptionShort: descriptionShort,
      descriptionLong: descriptionLong,
      gitHubLink: gitHubLink,
    };
    axios
      .patch(projectsEndpoint + '/' + props.project.id, data)
      .then((response) => {
        if (response.status == 200) {
          props.setVisible(false);
          setTimeout(() => {
            toast({
              type: 'success',
              title: 'Projekt upgedated! :)',
              description: 'Das Projekt wurde erfolgreich upgedated',
            });
          }, 4000);
          props.update();
          resetModal();
        }
      });
  };

  return (
    <Modal open={props.visible} onClose={() => props.setVisible(false)}>
      <Modal.Header>{props.project.name}</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Sprachen"
              placeholder="Sprachen"
              value={languagesString}
              onChange={(e) => setLanguagesString(e.target.value)}
            />
            <Form.Input
              fluid
              label="Tags"
              placeholder="Tags"
              value={tagsString}
              onChange={(e) => setTagsString(e.target.value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Kurze Beschreibung"
              placeholder="Kurze Beschreibung"
              value={descriptionShort}
              onChange={(e) => setDescriptionShort(e.target.value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="GitHub Link"
              placeholder="GitHub Link"
              value={gitHubLink}
              onChange={(e) => setGitHubLink(e.target.value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.TextArea
              fluid
              label="Beschreibung"
              placeholder="Beschreibung"
              value={descriptionLong}
              onChange={(e) => setDescriptionLong(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => props.setVisible(false)} color="blue">
          Abbrechen
        </Button>
        <Button onClick={handleDelete} negative>
          Löschen
        </Button>
        <Button onClick={handleSave} positive>
          Speichern
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ViewProjectModal;
