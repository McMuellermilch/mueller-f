import React, { useState } from 'react';
import './login.css';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Input, Button, Checkbox } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [textFieldType, setTextFieldType] = useState('password');
  const [checked, setChecked] = useState(false);

  let history = useHistory();

  const handleSubmit = () => {
    let data = {
      username: username,
      password: password,
    };

    axios.post('api/users/login', data).then((response) => {
      if (response.status == 200) {
        console.log(response);
        props.setCurrentUser({
          email: response.data.email,
          username: response.data.username,
          id: response.data._id,
        });
        history.push('/management-console');
      }
    });
  };

  const handleCheck = () => {
    setChecked(!checked);
    if (checked === false) {
      setTextFieldType('text');
    } else {
      setTextFieldType('password');
    }
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
              type={textFieldType}
              fluid
              placeholder="Passwort..."
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <Checkbox
              label="Passwort anzeigen"
              checked={checked}
              onChange={handleCheck}
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
