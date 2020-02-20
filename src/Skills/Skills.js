import React from 'react';
import Skill from '../Skill/Skill';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


const Skills = () => {
  const GET_SKILLS =  gql`
  {
    allSkills {
        id
        title
        description
    }
  }
`;

const { loading, error, data } = useQuery(GET_SKILLS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error }</p>;

  return data.allSkills.map(({id, title, description}) => (
        <Skill key={id} title={title} description={description}/>
      ));
};

export default Skills;