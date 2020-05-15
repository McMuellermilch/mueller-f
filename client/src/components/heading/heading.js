import React, { useState } from 'react';
import './heading.css';

import { Button, Modal, Form, TextArea } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const Heading = () => {
  const [anrede, setAnrede] = useState('');
  const [vorname, setVorname] = useState('');
  const [nachname, setNachname] = useState('');
  const [email, setEmail] = useState('');
  const [nachricht, setNachricht] = useState('');

  return (
    <div className="heading">
      <div className="heading_title">mueller f.</div>
      <div className="heading_mail">
        <Modal trigger={<Button circular color="blue" icon="mail outline" />}>
          <Modal.Header>Schicken Sie mir 'ne E-Mail!</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  placeholder="Anrede"
                  onChange={(event) => setAnrede(event.target.value)}
                />
                <Form.Input
                  fluid
                  placeholder="Vorname"
                  onChange={(event) => setVorname(event.target.value)}
                />
                <Form.Input
                  fluid
                  placeholder="Nachname"
                  onChange={(event) => setNachname(event.target.value)}
                />
              </Form.Group>
              <Form.Input
                placeholder="E-Mail"
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextArea
                placeholder="Nachricht"
                onChange={(event) => setNachricht(event.target.value)}
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>Abbrechen</Button>
            <Button positive>Senden</Button>
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
};

export default Heading;
