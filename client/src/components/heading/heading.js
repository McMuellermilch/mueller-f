import React from 'react';
import './heading.css';

import { Button } from 'semantic-ui-react';
import 'react-circular-progressbar/dist/styles.css';

const Heading = () => {
  return (
    <div className="heading">
      <div className="heading_title">mueller f.</div>
      <div className="heading_mail" onClick={() => console.log('clicked')}>
        <Button circular color="#2185D0" icon="mail outline" />
      </div>
    </div>
  );
};

export default Heading;
