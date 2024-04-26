"use client"
import React from 'react';

const Isolator = ({ children }) => {
  return (
    <div style={{ margin: '20px auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px' }}>
      {children}
    </div>
  );
};

export default Isolator;
