import Home from '../index';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test('renders Loofah heading', () => {
  const wrapper = render(<BrowserRouter><Home /></BrowserRouter>);
  const { getByText } = wrapper;
  expect(getByText('Loofah').textContent).toEqual('Loofah');
});

describe('skills-by-category link', () => {
  test('clicking the button renders the skills-by-category page', () => {
    const wrapper = render(<BrowserRouter><Home /></BrowserRouter>);
    const { getByText } = wrapper;
    fireEvent.click(getByText('See the available skills'));
    expect(window.location.pathname).toContain('/skills-by-category');
  });
});
