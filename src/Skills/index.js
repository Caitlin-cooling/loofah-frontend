import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';

export const Skills = ({ queryDetails }) => {
  const { loading, error, data } = useQuery(queryDetails.query, {
    variables: queryDetails.variables
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return(
    <div>
      <h1>Skills</h1>
      <ul>
        {data[queryDetails.data].map((skill) => {
          return <li key={skill.id}>{skill.title}</li>;
        })}
      </ul>
    </div>
  );
};

Skills.propTypes = {
  queryDetails: PropTypes.object
};