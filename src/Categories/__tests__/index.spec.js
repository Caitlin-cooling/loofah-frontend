import React from 'react';
import { SkillsByCategory } from '../index';
import { GET_CATEGORIES_QUERY } from '../queries';
import { act, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
const wait = require('waait');

const mock = {
  request: {
    query: GET_CATEGORIES_QUERY
  },
  result: {
    data: {
      categories: [
        {
            'id': '1',
            'title': 'categoryTitle1',
            'description': 'categoryDescription1'
        },
        {
            'id': '2',
            'title': 'categoryTitle2',
            'description': 'categoryDescription1'
        }
      ]
    },
  },
};

let wrapper;

test('renders without error', () => {
  act(() => {
    render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <SkillsByCategory />
      </MockedProvider>
    );
  });
});

test('loading state', () => {
  act(() => {
    wrapper = render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <SkillsByCategory />
      </MockedProvider>
    );
  });
  const { getByText } = wrapper;
  expect(getByText('Loading...').textContent).toBe('Loading...');
});

test('error response', async () => {
  const errorMock = {
      request: {
        query: GET_CATEGORIES_QUERY
      },
      result: {
        error: new Error('Error')
      },
    };
  act(() => {
    wrapper = render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <SkillsByCategory />
      </MockedProvider>
    );
  });
  await wait(0);
  const { getByText } = wrapper;
  expect(getByText('Error').textContent).toBe('Error');
});

test('renders categories', async () => {
  act(() => {
    wrapper = render(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <SkillsByCategory />
      </MockedProvider>
    );
  });
  await wait(0);
  const { getByText } = wrapper;
  expect(getByText('categoryTitle1').textContent).toBe('categoryTitle1');
  expect(getByText('categoryTitle2').textContent).toBe('categoryTitle2');
});