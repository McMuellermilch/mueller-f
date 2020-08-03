import React, { useState } from 'react';
import './project.css';

import { Card, Modal, Label, Icon } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const Project = (props) => {
  const [visible, setVisible] = useState(false);
  const colors = {
    JavaScript: 'blue',
    Java: 'brown',
    Golang: 'teal',
    Python: 'purple',
    VisualBasic: 'green',
    Dart: 'red',
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
        {props.gitHubLink != '' ? (
          <Card.Content extra>
            Code on <Icon name="github" />
          </Card.Content>
        ) : (
          ''
        )}
      </Card>

      <Modal open={visible} onClose={() => setVisible(false)}>
        <Modal.Header>{props.title}</Modal.Header>

        <Modal.Content>
          <Modal.Description>
            {props.gitHubLink != '' ? (
              <a href={props.gitHubLink} target="_blank">
                <Label color="blue" image>
                  Open Source
                  <Label.Detail>
                    view code on <Icon name="github" />
                  </Label.Detail>
                </Label>
              </a>
            ) : (
              ''
            )}
          </Modal.Description>
          <div className="project_tags">
            {props.tags.map((tag, index) => {
              return (
                <Label key={index} size="tiny">
                  {tag}
                </Label>
              );
            })}
          </div>
          <p className="project_description">{props.descriptionLong}</p>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Project;
