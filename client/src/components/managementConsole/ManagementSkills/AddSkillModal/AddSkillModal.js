import React, { useState, useEffect } from 'react';
import './AddSkillModal.css';
import axios from 'axios';

import { Form, Button, Modal, Label } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

import { ChromePicker } from 'react-color';

const AddSkillModal = (props) => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [color, setColor] = useState();
  const skillsEndpoint = 'api/skills';

  const handleColorChange = (color) => setColor(color);

  return (
    <Modal open={props.visible} onClose={() => props.setVisible(false)}>
      <Modal.Header>Neuen Skill hinzufügen</Modal.Header>
      <Modal.Content>
        <div className="add_skill">
          <div className="add_skill_form">
            <Form>
              <Form.Input fluid label="Name" placeholder="Name" />
              <Form.Input fluid label="Level" placeholder="Level" />
            </Form>
          </div>
          <div className="add_skill_color">
            <ChromePicker color={color} onChangeComplete={handleColorChange} />
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default AddSkillModal;
