import React from 'react';
import './project.css';

import { Card, Icon, Label } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const Project = (props) => {
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
      <Card>
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
    </div>
  );
};

export default Project;
