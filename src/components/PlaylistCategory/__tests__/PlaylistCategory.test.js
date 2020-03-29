import PlaylistCategory from '../PlaylistCategory';
import React from 'react';
import { render } from '@testing-library/react';

test('renders the name of the category', () => {
  const category = {
    id: '1',
    title: 'Frontend 101',
    skills: [
      {id: '1', title: 'ReactJS', percentCompleted: 60},
      {id: '2', title: 'ES6', percentCompleted: 30},
      {id: '3', title: 'JavaScript', percentCompleted: 90},
      {id: '4', title: 'HTML', percentCompleted: 10},
    ]
  };
  const wrapper = render(<PlaylistCategory category={category}/>);
  const { getByText } = wrapper;
  expect(getByText('Frontend 101').textContent).toEqual('Frontend 101');
});
