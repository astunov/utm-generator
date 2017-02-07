import React from 'react';
import Presets from '../containers/presets';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m8">
          <h5> Форма </h5>
        </div>
        <div className="col s12 m4">
          <Presets />
        </div>
      </div>
    </div>
  );
};

export default App;
