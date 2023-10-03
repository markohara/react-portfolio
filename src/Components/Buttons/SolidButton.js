import React from 'react';

export const SolidButton = ({ onClick, children }) => (
  <button 
    onClick={onClick} 
    style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
  >
    {children}
  </button>
);