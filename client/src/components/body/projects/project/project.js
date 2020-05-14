import React, { useState } from 'react';
import './project.css';

import { Card, Modal, Label, Header, Image } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const Project = (props) => {
  const [visible, setVisible] = useState(false);
  const colors = {
    JavaScript: 'blue',
    Java: 'brown',
    Golang: 'teal',
    Python: 'purple',
    VisualBasic: 'green',
    Flutter: 'red',
  };

  return (
    <div className="project">
      <Card onClick={() => setVisible(true)}>
        <Card.Content>
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>
            <div className="project_label">
              {props.labelText.map((language, index) => {
                return (
                  <Label key={index} size="tiny" color={colors[language]}>
                    {language}
                  </Label>
                );
              })}
            </div>
          </Card.Meta>
          <Card.Description>{props.descriptionShort}</Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
      </Card>

      <Modal open={visible} onClose={() => setVisible(false)}>
        <Modal.Header>{props.title}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div className="project_tags">
              {props.tags.map((tag, index) => {
                return (
                  <Label key={index} size="tiny">
                    {tag}
                  </Label>
                );
              })}
            </div>
            <p>{props.descriptionLong}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Project;
