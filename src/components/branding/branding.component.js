import React from 'react';

import '../../styles/app.scss';
import '../../styles/branding.scss';

const Branding = ({url}) => (
  <div className="c-header">
    <div className="c-masthead">
      <div className="c-masthead__title">
        <img src={url} alt="Akkroo" />
      </div>
    </div>
   
  </div >
);

export default Branding;