import React from 'react';
import './managementConsole.css';

const ManagementConsole = (props) => {
  return (
    <>
      <div>Management Console</div>
      <div>{props.username}</div>
    </>
  );
};

export default ManagementConsole;
