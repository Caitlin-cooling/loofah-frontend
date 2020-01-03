import App from './App';
import HomePage from './HomePage/HomePage';
import Skills from './Skills/Skills';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

it('/ route goes to home page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );

  expect(wrapper.contains(HomePage)).toEqual(true);
});

it('/skills route goes to skills page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );

  expect(wrapper.contains(Skills)).toEqual(true);
});
