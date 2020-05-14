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
              {props.labelText.map((language) => {
                return (
                  <Label size="tiny" color={colors[language]}>
                    {language}
                  </Label>
                );
              })}
            </div>
          </Card.Meta>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
      </Card>

      <Modal
        open={visible}
        closeOnEscape={() => setVisible(false)}
        onClose={() => setVisible(false)}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src="/images/avatar/large/rachel.png" />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Project;
