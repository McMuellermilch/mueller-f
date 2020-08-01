import React, { useState, useEffect } from 'react';
import './AddProjectModal.css';
import axios from 'axios';

import { Form, Button, Modal } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const AddProjectModal = (props) => {
  const [langInputs, setLangInputs] = useState([
    <Form.Input label="Sprache" placeholder="Sprache" />,
  ]);
  return (
    <Modal open={props.visible} onClose={() => props.setVisible(false)}>
      <Modal.Header>Neues Projekt hinzufügen</Modal.Header>
      <Modal.Content>
        <Form>
          {langInputs}
          <Button
            circular
            color="blue"
            icon="plus"
            onClick={() =>
              setLangInputs(
                langInputs.concat(
                  <Form.Input label="Sprache" placeholder="Sprache" />
                )
              )
            }
          />
        </Form>
      </Modal.Content>
      <Modal.Actions></Modal.Actions>
    </Modal>
  );
};

export default AddProjectModal;
