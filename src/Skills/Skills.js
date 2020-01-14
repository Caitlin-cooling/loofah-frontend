import React, { useState } from 'react';
import Skill from '../Skill/Skill';

import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';
import casual from 'casual-browserify'

const schemaString = `type SkillMock {
  id: ID!
  title: String!
  description: String!
}
type Query {
  skills: [SkillMock!]!
}`;

const mocks = {
  SkillMock: () => ({
    title: casual.title,
    description: casual.description,
  })
 };

const schema = makeExecutableSchema({ typeDefs: schemaString });

addMockFunctionsToSchema({
  schema,
  mocks
});

const query = `
  query skillMock {
    skills {
      title
      description
    }
  }
`;

graphql(schema, query).then((result) => console.log('Got result', result));

const Skills = () => {
  const [skillsState] = useState({
    skills: [
      {title: 'JavaScript', description: 'Learn it'},
      {title: 'Java', description: 'Keep learning it'}
    ]
  });

  return (
    <div>
      <h1>Available Skills</h1>
      <Skill
        title={skillsState.skills[0].title}
        description={skillsState.skills[0].description}/>
      <Skill
        title={skillsState.skills[1].title}
        description={skillsState.skills[1].description}/>
    </div>
  );
};

export default Skills;