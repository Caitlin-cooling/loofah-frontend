import React from 'react';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import './Playlist.scss';
import { ReactComponent as DownArrow } from 'assets/icons/down-arrow.svg';

const skills = [
      {id: '1', title: 'ReactJS', category: 'Frontend 101'},
      {id: '2', title: 'ES6', category: 'Frontend 101'},
      {id: '3', title: 'JavaScript', category: 'Frontend 101'},
      {id: '4', title: 'HTML', category: 'Frontend 101'},
      {id: '1', title: 'Arrays', category: 'Backend 101'},
      {id: '2', title: 'Java EE', category: 'Backend 101'},
      {id: '3', title: 'Intellij', category: 'Backend 101'},
    ];

const currentSkill = {id: '7', title: 'VueJS', category: 'Frontend 101'};

const Playlist = () => {
  const playlistItems = skills.map((skill) =>
    <PlaylistItem key={skill.id} skill={skill}/>
  );

  return <div className="playlist">
    <h2>Playlist</h2>
    <p>Your currently playing skill...</p>
    <PlaylistItem skill={currentSkill} currentSkill={true}/>
    <p>Up next...</p>
    <ul>{playlistItems}</ul>
    <DownArrow title="down arrow" className="playlist__down-arrow"/>
  </div>;
};

export default Playlist;