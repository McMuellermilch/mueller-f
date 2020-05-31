import React, { useState, useEffect } from 'react';
import './ManagementMessages.css';
import axios from 'axios';

import { Table, Label } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const messagesEndpoint = 'http://localhost:5000/api/messages';

const ManagementMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messages.length == 0) {
      axios.get(messagesEndpoint).then((response) => {
        console.log(response);
        const messageData = response.data.map((message, index) => {
          return {
            anrede: message.anrede,
            vorname: message.vorname,
            nachname: message.nachname,
            email: message.email,
            subject: message.subject,
            nachricht: message.nachricht,
          };
        });
        console.log(messageData);
        setMessages(messageData);
      });
    }
  });

  return (
    <div className="management_messages">
      <div className="management_messages_title">Messages</div>
      <div className="management_messages_body">
        <Table selectable celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Vorname</Table.HeaderCell>
              <Table.HeaderCell>Nachname</Table.HeaderCell>
              <Table.HeaderCell>E-Mail</Table.HeaderCell>
              <Table.HeaderCell>Betreff</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {messages.map((message) => {
              return (
                <Table.Row>
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
