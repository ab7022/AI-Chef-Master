import React from 'react';

const GredientTextReverse = ({className, children}) => {
  const h1Style = {
    background: 'linear-gradient(to top, red, blue)',
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

export default GredientTextReverse;