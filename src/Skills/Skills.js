import React, { useState, useEffect } from 'react';
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

  const query = `
    query skillMock {
      skills {
        title
        description
      }
    }
  `;

  const [skillsState, setSkillsState] = useState({
    skills: []
  });

  const skillsList = [];

  addMockFunctionsToSchema({
    schema,
    mocks
  });

  const updateSkillsState = () => {
    graphql(schema, query).then((result) => {
      setSkillsState({
        skills: result.data.skills
      });
    });
  };

  useEffect(() => {
    updateSkillsState();
  });

  for(const [index] of skillsState.skills.entries()) {
    skillsList.push(
      <Skill key={index}
        title={skillsState.skills[index].title}
        description={skillsState.skills[index].description}
      />
    );
  }

  return (
    <div>
      <h1>Available Skills</h1>
      {skillsList}
    </div>
  );
};

export default Skills;