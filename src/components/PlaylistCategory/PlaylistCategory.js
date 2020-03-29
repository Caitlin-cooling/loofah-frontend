import React from 'react';
import PropTypes from 'prop-types';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import { ReactComponent as DownArrow } from 'assets/icons/down-arrow.svg';
import './PlaylistCategory.scss';

const PlaylistCategory = (props) => {
  const playlistItems = props.category.skills.map((skill) =>
    <PlaylistItem key={skill.id} skill={skill}/>
  );

  return <li className="playlist-category">
    <h4>{props.category.title}</h4>
    <ul>{playlistItems}</ul>
    <DownArrow title="down arrow" className="playlist-category__down-arrow"/>
  </li>;
};

PlaylistCategory.propTypes = {
  category: PropTypes.object.isRequired
};

export default PlaylistCategory;