import React from 'react';
import spinner from './loading-gif.gif';

/* eslint-disable import/no-anonymous-default-export */
export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
};