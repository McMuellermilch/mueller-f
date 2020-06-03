import React from 'react';
import './managementConsole.css';

import { Tab, Label, Icon } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

import MgmtMessages from './ManagementMessages/ManagementMessages';
import MgmtProjects from './ManagementProjects/ManagementProjects';
import MgmtSkills from './ManagementSkills/ManagementSkills';

const ManagementConsole = (props) => {
  const panes = [
    {
      menuItem: 'Messages',
      render: () => (
        <Tab.Pane>
          <MgmtMessages />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Projects',
      render: () => (
        <Tab.Pane>
          <MgmtProjects />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Skills',
      render: () => (
        <Tab.Pane>
          <MgmtSkills />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div className="management_console">
      <div className="management_console_header">
        <div className="management_console_header_title">
          Management Console
        </div>
        <div className="management_console_header_username">
          <Label color="blue" image>
            <Icon name="user" />
            Logged in as:
            <Label.Detail>{props.username}</Label.Detail>
          </Label>
        </div>
      </div>
      <div className="management_console_body">
        <Tab panes={panes} />
      </div>
    </div>
  );
};

export default ManagementConsole;
