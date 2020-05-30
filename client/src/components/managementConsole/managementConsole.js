import React from 'react';
import './managementConsole.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Input, Button } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

import MgmtMessages from './ManagementMessages/ManagementMessages';
import MgmtProjects from './ManagementProjects/ManagementProjects';
import MgmtSkills from './ManagementSkills/ManagementSkills';

const ManagementConsole = (props) => {
  return (
    <div className="management_console">
      <div className="management_console_header">
        <div className="management_console_header_title">
          Management Console
        </div>
        <div className="management_console_header_username">
          {props.username}
        </div>
      </div>
      <div className="management_console_body">
        <Router>
          <Route
            exact
            path="/management-console/messages"
            component={MgmtMessages}
          />
          <Route
            exact
            path="/management-console/projects"
            component={MgmtProjects}
          />
          <Route
            exact
            path="/management-console/skills"
            component={MgmtSkills}
          />
        </Router>
      </div>
    </div>
  );
};

export default ManagementConsole;
