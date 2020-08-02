import React, { useState } from 'react';
import './heading.css';
import axios from 'axios';

import { Button, Modal, Form, TextArea } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const Heading = () => {
  const [visible, setVisible] = useState(false);
  const [anrede, setAnrede] = useState('');
  const [vorname, setVorname] = useState('');
  const [nachname, setNachname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [nachricht, setNachricht] = useState('');

  let handleSubmit = () => {
    let data = {
      anrede: anrede,
      vorname: vorname,
      nachname: nachname,
      email: email,
      subject: subject,
      nachricht: nachricht,
    };
    console.log(data);
    axios.post('http://localhost:5000/api/messages', data).then((response) => {
      if (response.status == 200) {
        setVisible(false);
      }
    });
  };

  return (
    <div className="heading">
      <div
        onClick={() => console.log('home route clicked')}
        className="heading_title"
      >
        mueller f.
      </div>
      <div className="heading_github">
        <a href="https://github.com/McMuellermilch" target="_blank">
          <Button circular color="grey" icon="github" />
        </a>
      </div>
      <div className="heading_linkedin">
        <a
          href="https://www.linkedin.com/in/florian-m%C3%BCller-916269120/"
          target="_blank"
        >
          <Button circular color="linkedin" icon="linkedin" />
        </a>
      </div>
      <div className="heading_mail">
        <Button
          circular
          color="blue"
          icon="mail outline"
          onClick={() => setVisible(true)}
        />
        <Modal open={visible} onClose={() => setVisible(false)}>
          <Modal.Header>Schicken Sie mir eine E-Mail!</Modal.Header>
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
              <Form.Input
                placeholder="Betreff"
                onChange={(event) => setSubject(event.target.value)}
              />
              <TextArea
                placeholder="Nachricht"
                onChange={(event) => setNachricht(event.target.value)}
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setVisible(false)} negative>
              Abbrechen
            </Button>
            <Button onClick={handleSubmit} positive>
              Senden
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </div>
  );
};

export default Heading;
