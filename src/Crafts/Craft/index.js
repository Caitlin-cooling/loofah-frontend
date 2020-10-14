import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { GET_CRAFT_BY_ID } from './queries';

export const Craft = ({ id }) => {
  const { loading, error, data } = useQuery(GET_CRAFT_BY_ID, {
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return(
    <div>
      <h3>{data.craft.title}</h3>
      <p>{data.craft.description}</p>
    </div>
  );
};

Craft.propTypes = {
  id: PropTypes.string
};