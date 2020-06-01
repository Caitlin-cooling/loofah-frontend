import React from 'react';
import PropTypes from 'prop-types';
import './PlaylistItem.scss';

const PlaylistItem = (props) => {
  const skill = props.skill;
  const currentSkill = props.currentSkill;

  return <li className={`playlist-item ${currentSkill ? 'current' : ''}`}>
    <p>{skill.title}</p>
    <div className="playlist-item__category">{skill.category}</div>
  </li>;
};

PlaylistItem.propTypes = {
  skill: PropTypes.object.isRequired,
  currentSkill: PropTypes.bool
};

export default PlaylistItem;