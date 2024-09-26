
// src/ui/Card.jsx

import React from 'react';

const Card = ({ className, children }) => {
  return (
    <div className={`bg-black shadow-lg rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Card;
