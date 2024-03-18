import React from 'react';

const GredientText = ({className, children}) => {
  const h1Style = {
    background: 'linear-gradient(to bottom, red, blue)',
    fontWeight: 500,
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div>
      <p style={h1Style} className={className}>{children}</p>
    </div>
  );
};

export default GredientText;