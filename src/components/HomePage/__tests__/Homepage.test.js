import HomePage from '../HomePage';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test('renders Loofah heading', () => {
  const wrapper = render(<BrowserRouter><HomePage /></BrowserRouter>);
  const { getByText } = wrapper;
  expect(getByText('Loofah').textContent).toEqual('Loofah');
});

describe('skill link', () => {
  test('clicking the button takes you to skills page', () => {
    const wrapper = render(<BrowserRouter><HomePage /></BrowserRouter>);
    const { getByText } = wrapper;
    fireEvent.click(getByText('See the available skills'));
    expect(window.location.pathname).toContain('/skills');
  });
});

describe('playlist link', () => {
  test('clicking the button takes you to playlist page', () => {
    const wrapper = render(<BrowserRouter><HomePage /></BrowserRouter>);
    const { getByText } = wrapper;
    fireEvent.click(getByText('See your playlist'));
    expect(window.location.pathname).toContain('/playlist');
  });
});
