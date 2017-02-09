import React from 'react';
import Presets from '../containers/presets';
import Form from '../containers/form';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col s12 m8">
        <h5> Форма </h5>
        <Form />
      </div>
      <div className="col s12 m4">
        <Presets />
      </div>
    </div>
  </div>
  );

export default App;
