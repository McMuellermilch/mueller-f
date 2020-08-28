import React from 'react';
import './skill.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skill = (props) => {
  return (
    <div className="skill">
      <CircularProgressbar
        value={props.value}
        text={props.text}
        styles={buildStyles({
          textColor: props.color,
          pathColor: props.color,
          textSize: '17px',
        })}
      />
    </div>
  );
};

export default Skill;
