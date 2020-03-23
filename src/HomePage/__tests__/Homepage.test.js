import HomePage from '../HomePage';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

test('renders Loofah heading', () => {
  const wrapper = mount((<BrowserRouter><HomePage /></BrowserRouter>));
  expect(wrapper.contains(<h1>Loofah</h1>)).toEqual(true);
});

describe('skill link', () => {
  test('clicking the button takes you to skills page', () => {
    const wrapper = render(<BrowserRouter><HomePage /></BrowserRouter>);
    const { getByText } = wrapper;
    fireEvent.click(getByText('See the available skills'));
    expect(window.location.pathname).toContain('/skills');
  });
});
