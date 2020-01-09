import React from 'react';
import Skill from '../../Skill/Skill';
import Skills from '../Skills';
import { mount } from 'enzyme';

test('renders available skills heading', () => {
  const wrapper = mount(<Skills/>);

  expect(wrapper.contains(<h1>Available Skills</h1>)).toEqual(true);
});

test('renders the skill components', () =>{
  const wrapper = mount(<Skills/>);
  const skill1 = <Skill
    title="JavaScript"
    description="Learn it"
  />;
  const skill2 = <Skill
    title="Java"
    description="Keep learning it"
  />;

  expect(wrapper.contains(skill1)).toEqual(true);
  expect(wrapper.contains(skill2)).toEqual(true);
});