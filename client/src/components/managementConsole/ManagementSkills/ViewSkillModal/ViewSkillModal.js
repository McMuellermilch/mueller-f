import React, { useState, useEffect } from 'react';
import './ViewSkillModal.css';
import axios from 'axios';

import { Button, Modal, Form } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

const ViewSkillModal = (props) => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');

  const skillsEndpoint = 'api/skills';

  const handleDelete = () => {
    console.log('delete pressed');
  };

  const handleSave = () => {
    console.log('save pressed');
  };

  return (
    <Modal open={props.visible} onClose={() => props.setVisible(false)}>
      <Modal.Header>{props.skill.name}</Modal.Header>
      <Modal.Content>
        <div className="modal_content">
          <div className="modal_content_form">
            <Form>
              <Form.Input label="Name" placeholder="Name" />
              <Form.Input label="Level" placeholder="Level" />
            </Form>
          </div>
          <div className="modal_content_stats">
            <CircularProgressbar
              value={props.skill.level}
              text={props.skill.name}
              styles={buildStyles({
                textColor: '#2980b9',
                pathColor: '#2980b9',
              })}
            />
          </div>
        </div>
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

export default ViewSkillModal;
