// @flow
import React, { PropTypes } from 'react';

const preset = (props:Object) => {
  const { presetTitle, handleToggle, classList } = props;
  return (
    <button
      onClick={handleToggle}
      className={classList}
    >
      {presetTitle}
    </button>
  );
};

export default preset;

preset.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  classList: PropTypes.string.isRequired,
  presetTitle: PropTypes.string.isRequired
};
