import PlaylistItem from '../PlaylistItem';
import React from 'react';
import { render } from '@testing-library/react';

test('renders playlist item', () => {
  const skill = {id: '1', title: 'ReactJS', percentCompleted: 60};
  const wrapper = render(<PlaylistItem skill={skill}/>);
  const { getByText } = wrapper;
  expect(getByText('ReactJS').textContent).toEqual('ReactJS');
  expect(getByText('60%').textContent).toEqual('60%');
});