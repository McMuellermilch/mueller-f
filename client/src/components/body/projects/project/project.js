import React, { useState } from 'react';
import './project.css';

import { Card, Modal, Label, Icon, Divider } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const Project = (props) => {
  const [visible, setVisible] = useState(false);

  const getColor = (name) => {
    let item = props.skills.find((elem, index) => {
      if (elem.name == name) {
        return elem.color;
      }
    });
    return item;
  };

  const getContrastYIQ = (hexcolor) => {
    hexcolor = hexcolor.replace('#', '');
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  };

  return (
    <div className="project">
      <Card className="card_style" onClick={() => setVisible(true)}>
        <Card.Content>
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>
            <div className="project_label">
              {props.labelText.map((language, index) => {
                let item = getColor(language);
                let color = '#34495e';
                if (item != undefined) {
                  color = item.color;
                }

                return (
                  <Label
                    key={index}
                    size="tiny"
                    style={{
                      backgroundColor: color,
                      color: getContrastYIQ(color),
                    }}
                  >
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
              <div className="project_opensource_label">
                <a href={props.gitHubLink} target="_blank">
                  <Label color="blue" image>
                    Open Source
                    <Label.Detail>
                      view code on <Icon name="github" />
                    </Label.Detail>
                  </Label>
                </a>
              </div>
            ) : (
              ''
            )}
          </Modal.Description>
          <div>
            {props.tags.map((tag, index) => {
              let item = getColor(tag);
              let color = '#34495e';
              if (item != undefined) {
                color = item.color;
              }
              return (
                <Label
                  key={index}
                  size="tiny"
                  style={{
                    backgroundColor: color,
                    color: getContrastYIQ(color),
                  }}
                >
                  {tag}
                </Label>
              );
            })}
          </div>
          <div className="project_description_short">
            {props.descriptionShort}
          </div>
          <Divider />
          <div className="project_description">{props.descriptionLong}</div>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Project;
