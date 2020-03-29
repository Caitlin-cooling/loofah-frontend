import React from 'react';
import PropTypes from 'prop-types';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import './PlaylistCategory.scss';

const PlaylistCategory = (props) => {
  const playlistItems = props.category.skills.map((skill) =>
    <PlaylistItem key={skill.id} skill={skill}/>
  );

  return <li className="playlist-category">
    <h4>{props.category.title}</h4>
    <ul>{playlistItems}</ul>
  </li>;
};

PlaylistCategory.propTypes = {
  category: PropTypes.object.isRequired
};

export default PlaylistCategory;