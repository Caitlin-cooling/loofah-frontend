import Playlist from '../Playlist';
import React from 'react';
import { render } from '@testing-library/react';

test('renders Playlist title and subtitle', () => {
  const wrapper = render(<Playlist />);
  const { getByText } = wrapper;
  expect(getByText('Playlist').textContent).toEqual('Playlist');
  expect(getByText('Your currently playing skill...').textContent).toEqual('Your currently playing skill...');
  expect(getByText('Up next...').textContent).toEqual('Up next...');
});
