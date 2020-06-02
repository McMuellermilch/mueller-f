import React, { useState, useEffect } from 'react';
import './ManagementMessages.css';
import axios from 'axios';

import { Table, Button, Modal, Card } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const messagesEndpoint = 'http://localhost:5000/api/messages';

const ManagementMessages = () => {
  const [messages, setMessages] = useState([]);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState({
    id: '',
    read: false,
    anrede: '',
    vorname: '',
    nachname: '',
    email: '',
    subject: '',
    nachricht: '',
    createdAt: '',
    updatedAt: '',
  });

  useEffect(() => {
    if (messages.length == 0) {
      axios.get(messagesEndpoint).then((response) => {
        console.log(response);
        const messageData = response.data.map((message, index) => {
          return {
            id: message._id,
            read: message.read,
            anrede: message.anrede,
            vorname: message.vorname,
            nachname: message.nachname,
            email: message.email,
            subject: message.subject,
            nachricht: message.nachricht,
            createdAt: message.createdAt,
            updatedAt: message.updatedAt,
          };
        });
        console.log(messageData);
        setMessages(messageData);
      });
    }
  });

  const openModal = (id) => {
    const message = messages.find((element) => element.id == id);
    setMessage({
      id: message.id,
      read: message.read,
      anrede: message.anrede,
      vorname: message.vorname,
      nachname: message.nachname,
      email: message.email,
      subject: message.subject,
      nachricht: message.nachricht,
      createdAt: message.createdAt,
      updatedAt: message.updatedAt,
    });
    setVisible(true);
    axios.patch('http://localhost:5000/api/messages/' + message.id);
  };

  return (
    <div className="management_messages">
      <div className="management_messages_title">Messages</div>
      <div className="management_messages_body">
        <Modal open={visible} onClose={() => setVisible(false)}>
          <Modal.Header>{message.subject}</Modal.Header>
          <Modal.Content>
            <div className="management_messages_body_modal">
              <div className="management_messages_body_modal_address">
                <Card>
                  <Card.Content>
                    <Card.Header>
                      {message.anrede} {message.vorname} {message.nachname}
                    </Card.Header>
                    <Card.Meta>{message.email}</Card.Meta>
                  </Card.Content>
                </Card>
              </div>
              <div className="management_messages_body_modal_details">
                <div>Nachricht erhalten: {message.createdAt}</div>
                <div>Nachricht gelesen: {message.updatedAt}</div>
              </div>
              <div className="management_messages_body_modal_subject">
                Betreff: <strong>{message.subject}</strong>
              </div>
              <div className="management_messages_body_modal_message">
                {message.nachricht}
              </div>
            </div>
          </Modal.Content>
          <Modal.Actions></Modal.Actions>
        </Modal>
        <Table selectable celled size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Vorname</Table.HeaderCell>
              <Table.HeaderCell>Nachname</Table.HeaderCell>
              <Table.HeaderCell>E-Mail</Table.HeaderCell>
              <Table.HeaderCell>Betreff</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {messages.map((message) => {
              return (
                <Table.Row warning={!message.read}>
                  <Table.Cell collapsing>
                    <Button
                      circular
                      color="blue"
                      icon="edit outline"
                      onClick={() => openModal(message.id)}
                    />
                  </Table.Cell>
                  <Table.Cell>{message.vorname}</Table.Cell>
                  <Table.Cell>{message.nachname}</Table.Cell>
                  <Table.Cell>{message.email}</Table.Cell>
                  <Table.Cell>{message.subject}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManagementMessages;
