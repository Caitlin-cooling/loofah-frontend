import React from 'react';
import PropTypes from 'prop-types';

const skill = (props) =>  {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

skill.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default skill;