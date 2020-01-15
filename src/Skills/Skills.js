import React, { useState } from 'react';
import Skill from '../Skill/Skill';

import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';

const Skills = () => {
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
      title: 'Title',
      description: 'Description'
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

  const [skillsState, setSkillsState] = useState({
    skills: [
      {title: 'JavaScript', description: 'Learn it'},
      {title: 'Java', description: 'Keep learning it'}
    ]
  });

  const updateSkillsState = () => {
    graphql(schema, query).then((result) => {
      setSkillsState({
        skills: result.data.skills
      });
    });
  };

  // we should be iterating over the array here to avoid hard coding the number of skills
  return (
    <div>
      <h1>Available Skills</h1>
      <Skill
        title={skillsState.skills[0].title}
        description={skillsState.skills[0].description}/>
      <Skill
        title={skillsState.skills[1].title}
        description={skillsState.skills[1].description}/>
        <button onClick={updateSkillsState}>click me</button>
    </div>
  );
};

export default Skills;