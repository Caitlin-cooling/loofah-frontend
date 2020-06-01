import PlaylistItem from '../PlaylistItem';
import React from 'react';
import { render } from '@testing-library/react';

test('renders playlist item', () => {
  const skill = {id: '1', title: 'ReactJS', category: 'Frontend 101'};
  const wrapper = render(<PlaylistItem skill={skill}/>);
  const { getByText } = wrapper;
  expect(getByText('ReactJS').textContent).toEqual('ReactJS');
  expect(getByText('Frontend 101').textContent).toEqual('Frontend 101');
});