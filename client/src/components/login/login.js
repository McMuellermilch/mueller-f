import React, { useState } from 'react';
import './login.css';

import { Input, Button } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
          <Button fluid color="blue">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
