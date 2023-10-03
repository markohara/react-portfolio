import React from 'react';

export const OutlinedButton = ({ onClick, children }) => (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: 'transparent', color: 'blue', padding: '10px 20px', border: '2px solid blue', borderRadius: '5px' }}
    >
      {children}
    </button>
  );