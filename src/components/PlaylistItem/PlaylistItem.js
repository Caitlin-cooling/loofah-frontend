import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';
import './PlaylistItem.scss';

const PlaylistItem = (props) => {
  const skill = props.skill;

  return <li className="playlist-item">
    <p>{skill.title}</p>

    <div className="playlist-item__progress-bar">
      <Progress
        value={skill.percentCompleted}
        max="100"
        barClassName="playlist-item__progress-bar--bar"
      />
      <div className="playlist-item__progress-bar--text">{skill.percentCompleted}%</div>
    </div>

  </li>;
};

PlaylistItem.propTypes = {
  skill: PropTypes.object.isRequired
};

export default PlaylistItem;