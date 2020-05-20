import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

import { Input, Button } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    let data = {
      username: username,
      password: password,
    };

    axios
      .post('http://localhost:5000/api/users/login', data)
      .then((response) => {
        console.log(response);
        //TODO
        // history push nach management-console
        // abgleich ob response == null
      });
  };

  return (
    <div className="login">
      <div className="login_content">
        <div className="login_title">Management Console Login</div>
        <div className="login_body">
          <div className="login_body_input">
            <Input
              fluid
              placeholder="Username..."
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="login_body_input">
            <Input
              fluid
              placeholder="Passwort..."
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <Button fluid color="blue" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
