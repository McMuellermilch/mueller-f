import React, { useState, useEffect } from 'react';
import './ManagementMessages.css';
import axios from 'axios';

import { Table, Button, Modal, Card, Divider } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

import { toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

const messagesEndpoint = 'api/messages';

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

  const toDateString = (datestring) => {
    //2020-08-15 T  17:18:06.171Z
    const year = datestring.substring(0, 4);
    const month = datestring.substring(5, 7);
    const day = datestring.substring(8, 10);
    const hour = datestring.substring(11, 13);
    const minute = datestring.substring(14, 16);
    return `${day}.${month}.${year} | ${hour}:${minute}`
  }

  const fetchMessageData = () => {
    axios.get(messagesEndpoint).then((response) => {
      console.log(response);
      const messageData = response.data.map((message, index) => {
        console.log(message.createdAt.toString());
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
      setMessages(messageData);
    });
  };

  useEffect(() => {
    if (messages.length == 0) {
      fetchMessageData();
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
    axios.patch('http://localhost:5000/api/messages/' + message.id).then(response => {
      console.log(response.status)
    });
    fetchMessageData();
    setVisible(true);
  };

  const handleDelete = () => {
    console.log(message.id)
    axios.delete(messagesEndpoint + '/' + message.id).then((response) => {
      if (response.status == 204) {
        setTimeout(() => {
          toast({
            type: 'success',
            title: 'Nachricht gelöscht! :)',
            description: 'Die Nachricht wurde erfolgreich gelöscht',
          });
        }, 1000);
        fetchMessageData();
        setVisible(false);
      }
    });
  }

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
                <div className="label">Erhalten:</div>
                <div className="time">{toDateString(message.createdAt)}</div>
                <div className="label">Gelesen:</div>
                <div className="time">{toDateString(message.updatedAt)}</div>
              </div>
              <div className="management_messages_body_modal_subject">
                Betreff: <strong>{message.subject}</strong>
              </div>
              <div className="management_messages_body_modal_message">
              <Card fluid>
                  <Card.Content>
                  {message.nachricht}
                  </Card.Content>
                </Card>
                
              </div>
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setVisible(false)}>Abbrechen</Button>
            <Button onClick={handleDelete} color="red">Löschen</Button>
          </Modal.Actions>
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
