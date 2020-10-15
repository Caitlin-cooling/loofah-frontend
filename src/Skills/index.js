import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { GET_SKILLS_BY_CATEGORY_QUERY } from './queries';

export const Skills = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_SKILLS_BY_CATEGORY_QUERY, {
    variables: { categoryId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return(
    <div>
      <h1>Skills</h1>
      <ul>
        {data.skillsByCategory.map((skill) => {
          return <li key={skill.id}>{skill.title}</li>;
        })}
      </ul>
    </div>
  );
};

Skills.propTypes = {
  categoryId: PropTypes.string
};