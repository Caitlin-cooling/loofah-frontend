import React, { useState } from 'react';
import Skill from '../Skill/Skill';

import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';

const schemaString = `type Skill {
  id: ID!
  title: String!
  description: String!
}
type Query {
  skills: [Skill!]!
}`;
const schema = makeExecutableSchema({ typeDefs: schemaString });
addMockFunctionsToSchema({ schema });

const query = `
  query skill {
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