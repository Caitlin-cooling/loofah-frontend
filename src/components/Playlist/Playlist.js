import React from 'react';
import PlaylistCategory from '../PlaylistCategory/PlaylistCategory';
import './Playlist.scss';

const categories = [
  {
    id: '1',
    title: 'Frontend 101',
    skills: [
      {id: '1', title: 'ReactJS', percentCompleted: 60},
      {id: '2', title: 'ES6', percentCompleted: 30},
      {id: '3', title: 'JavaScript', percentCompleted: 90},
      {id: '4', title: 'HTML', percentCompleted: 10},
    ]
  }, {
    id: '2',
    title: 'Backend 101',
    skills: [
      {id: '1', title: 'Arrays', percentCompleted: 0},
      {id: '2', title: 'Java EE', percentCompleted: 0},
      {id: '3', title: 'Intellij', percentCompleted: 0},
    ]
  }
];



const Playlist = () => {
  const playlistCategories = categories.map((category) =>
    <PlaylistCategory key={category.id} category={category} />
  );

  return <div className="playlist">
    <h2>Playlist</h2>
    <p>Your currently playing skills...</p>
    <ul>{playlistCategories}</ul>
  </div>;
};

export default Playlist;