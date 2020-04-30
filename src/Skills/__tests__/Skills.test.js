import React from 'react';
import { Skills, GET_SKILLS_QUERY } from '../Skills';
import { act, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
const wait = require('waait');

const mock = {
    request: {
      query: GET_SKILLS_QUERY
    },
    result: {
      data: {
        allSkills: [{ id: '1', title: 'Title', description: 'Description' }],
      },
    },
  };

let wrapper;

test('renders without error', () => {
  act(() => {
    render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Skills />
      </MockedProvider>
    );
  });
});

test('loading state', () => {
  act(() => {
    wrapper = render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Skills />
      </MockedProvider>
    );
  });

  const { getByText } = wrapper;
  expect(getByText('Loading...').textContent).toBe('Loading...');
});

test('error response', async () => {
  const errorMock = {
      request: {
        query: GET_SKILLS_QUERY
      },
      result: {
        error: new Error('Oh no')
      },
    };

  act(() => {
    wrapper = render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <Skills />
      </MockedProvider>
    );
  });

  await wait(0);

  const { getByText } = wrapper;
  expect(getByText('Error').textContent).toBe('Error');
});

test('renders skill information', async () => {
  act(() => {
    wrapper = render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Skills />
      </MockedProvider>
    );
  });

  await wait(0);

  const { getByText } = wrapper;
  expect(getByText('Title').textContent).toBe('Title');
  expect(getByText('Description').textContent).toBe('Description');
});
