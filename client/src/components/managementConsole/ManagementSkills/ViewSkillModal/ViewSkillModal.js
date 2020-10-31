import React, { useState, useEffect } from 'react';
import './ViewSkillModal.css';
import axios from 'axios';

import { Button, Modal, Form } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

import { ChromePicker } from 'react-color';

const ViewSkillModal = (props) => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [color, setColor] = useState('');

  const skillsEndpoint = 'api/skills';

  useEffect(() => {
    setName(props.skill.name);
    setLevel(props.skill.level);
    setColor(props.skill.color);
  }, [props]);

  const resetModal = () => {
    setName('');
    setLevel('');
    setColor('');
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const handleDelete = () => {
    axios.delete(skillsEndpoint + '/' + props.skill.id).then((response) => {
      if (response.status == 204) {
        props.setVisible(false);
        setTimeout(() => {
          toast({
            type: 'success',
            title: 'Skill gelöscht! :)',
            description: 'Der Skill wurde erfolgreich gelöscht',
          });
        }, 1000);
        props.update();
      }
    });
  };

  const handleSave = () => {
    let data = {
      name: name,
      level: level,
      color: color,
    };

    axios
      .patch(skillsEndpoint + '/' + props.skill.id, data)
      .then((response) => {
        if (response.status == 200) {
          props.setVisible(false);
          setTimeout(() => {
            toast({
              type: 'success',
              title: 'Skill upgedated! :)',
              description: 'Der Skill wurde erfolgreich upgedated',
            });
          }, 4000);
          props.update();
          resetModal();
        }
      });
  };

  return (
    <Modal open={props.visible} onClose={() => props.setVisible(false)}>
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content>
        <div className="modal_content">
          <div className="modal_content_form">
            <div className="modal_content_form_input">
              <Form>
                <Form.Input
                  label="Name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Input
                  label="Level"
                  placeholder="Level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                />
              </Form>
            </div>
            <div className="modal_content_form_color">
              <ChromePicker color={color} onChange={handleColorChange} />
            </div>
          </div>
          <div className="modal_content_stats">
            <CircularProgressbar
              value={level}
              text={name}
              styles={buildStyles({
                textColor: color,
                pathColor: color,
                textSize: '17px',
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
