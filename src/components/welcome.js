import React from 'react';
import Counter from '../containers/counter.js';
import Controls from '../containers/controls.js';

// function based "dumb" component with no state
const Welcome = () => {
  return (
    <div>
      react+webpack+babel+eslint starter
      <Counter />
      <Controls />
    </div>
  );
};


export default Welcome;
