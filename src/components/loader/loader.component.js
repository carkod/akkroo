import React from 'react';
import '../../styles/app.scss';

const Loader = ({text}) => (
  <div className="u-notification"><h1>{text}</h1></div>
);

export default Loader;