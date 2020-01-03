import React from 'react';
import PropTypes from 'prop-types';

const skill = (props) =>  {
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <p>Description: {props.description}</p>
    </div>
  );
};

skill.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default skill;