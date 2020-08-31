import React, { useState, useEffect } from 'react';
import './AddSkillModal.css';
import axios from 'axios';

import { Form, Button, Modal, Label } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

import { toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

import { ChromePicker } from 'react-color';

const AddSkillModal = (props) => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [color, setColor] = useState();

  const skillsEndpoint = 'api/skills';

  const resetModal = () => {
    setName('');
    setLevel('');
    setColor('');
  };

  const handleColorChange = (color) => setColor(color);

  const handleSubmit = () => {
    let data = {
      name: name,
      level: level,
      color: color.hex,
    };

    axios.post(skillsEndpoint, data).then((response) => {
      console.log(response);
      if (response.status == 200) {
        props.setVisible(false);
        setTimeout(() => {
          toast({
            type: 'success',
            title: 'Skill hinzugefügt! :)',
            description: 'Der Skill wurde erfolgreich gespeichert',
          });
        }, 4000);
        props.update();
        resetModal();
      }
    });
  };

  return (
    <Modal open={props.visible} onClose={() => props.setVisible(false)}>
      <Modal.Header>Neuen Skill hinzufügen</Modal.Header>
      <Modal.Content>
        <div className="add_skill">
          <div className="add_skill_form">
            <Form>
              <Form.Input
                fluid
                label="Name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Input
                fluid
                label="Level"
                placeholder="Level"
                onChange={(e) => setLevel(e.target.value)}
              />
            </Form>
          </div>
          <div className="add_skill_color">
            <ChromePicker color={color} onChangeComplete={handleColorChange} />
          </div>
        </div>
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
  );
};

export default AddSkillModal;
