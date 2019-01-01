import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { title, className, ...rest } = props;
  return <button
    className={`btn ${className}`}
    {...rest}
  >
    {title}
  </button>
};

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Button;