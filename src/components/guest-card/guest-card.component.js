import React from 'react';
import '../../styles/guest-card.scss';


const ProductCard = ({
  name,
  email,
  handleClick,
}) => {

  return (
    <button className="c-card" onClick={handleClick}>
      <h1 className="c-card-heading-1">{name}</h1>
      <p className="c-card-details">{email || ''}</p>
    </button>
  )
};

export default ProductCard;