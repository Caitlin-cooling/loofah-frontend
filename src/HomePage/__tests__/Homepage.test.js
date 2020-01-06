import HomePage from '../HomePage';
import React from 'react';
import Skills from '../../Skills/Skills';
import { BrowserRouter, Link } from 'react-router-dom';
import { mount } from 'enzyme';

test('renders Loofah heading', () => {
  const wrapper = mount((<BrowserRouter><HomePage /></BrowserRouter>));

  expect(wrapper.contains(<h1>Loofah</h1>)).toEqual(true);
});

test('renders skills link', () => {
  const wrapper = mount((<BrowserRouter><HomePage /></BrowserRouter>));
  const link = <Link to="/skills">See the available skills</Link>;

  expect(wrapper.contains(link)).toEqual(true);
});

test('clicking the button takes you to skills page', () => {
  const wrapper = mount(<BrowserRouter><HomePage /></BrowserRouter>);

  wrapper.find('button').simulate('click');

  expect(wrapper.find(Skills)).toHaveLength(0);
});