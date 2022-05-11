import React from 'react';
import PropTypes from 'prop-types';



// eslint-disable-next-line no-unused-vars
const WeatherIcon = ({ title, path, size, viewBox, color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}  
      fill="#ffffff" >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
};

WeatherIcon.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  viewBox: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

WeatherIcon.defaultProps = {
  color: '#000000',
  size: 40,
  viewBox: '0 -5 35 40',
};

export default WeatherIcon;
