import App from './App';
import HomePage from './components/HomePage/HomePage';
import { Skills } from './components/Skills/Skills';
import Playlist from './components/Playlist/Playlist';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

test('/ route goes to home page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );

  expect(wrapper.contains(HomePage)).toEqual(true);
});

test('/skills route goes to skills page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );

  expect(wrapper.contains(Skills)).toEqual(true);
});

test('/playlist route goes to playlist page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );

  expect(wrapper.contains(Playlist)).toEqual(true);
});
