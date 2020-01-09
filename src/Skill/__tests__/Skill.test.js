import { mount } from 'enzyme';
import React from 'react';
import Skill from '../Skill';

test('renders the title and description of given', () => {
  const wrapper = mount(
    <Skill title="test title" description="test description"/>
  );
  const title = <h2>Title: test title</h2>;
  const description = <p>Description: test description</p>;

  expect(wrapper.contains(title)).toEqual(true);
  expect(wrapper.contains(description)).toEqual(true);
});