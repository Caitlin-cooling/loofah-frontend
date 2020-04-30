import React from 'react';
import Skill from '../Skill/Skill';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export const GET_SKILLS_QUERY =  gql`
{
  allSkills {
      id
      title
      description
  }
}
`;

export const Skills = () => {
  const { loading, error, data } = useQuery(GET_SKILLS_QUERY);

  if (loading) return <p>Loading...</p>;

  //TODO: handle errors in a more comprehensive way
  if (error) return <p>Error</p>;

  return data.allSkills.map(({id, title, description}) => (
        <Skill key={id} title={title} description={description}/>
      ));
};
