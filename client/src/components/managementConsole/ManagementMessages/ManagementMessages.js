import React, { useState, useEffect } from 'react';
import './ManagementMessages.css';
import axios from 'axios';

import { Table, Label } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const messagesEndpoint = 'http://localhost:5000/api/messages';

const ManagementMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(messagesEndpoint).then((response) => {
      console.log(response);
      const messageData = response.data.map((message, index) => {
        return {
          anrede: message.anrede,
          vorname: message.vorname,
          nachname: message.nachname,
          email: message.email,
          nachricht: message.nachricht,
        };
      });
      console.log(messageData);
      setMessages(messageData);
    });
  }, []);

  return (
    <div className="management_messages">
      <div>Messages</div>
      <div>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Anrede</Table.HeaderCell>
              <Table.HeaderCell>Vorname</Table.HeaderCell>
              <Table.HeaderCell>Nachname</Table.HeaderCell>
              <Table.HeaderCell>Nachricht</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body></Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManagementMessages;
