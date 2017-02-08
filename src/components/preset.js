// @flow
import React, { PropTypes } from 'react';

const preset = (props: Object) => {
  const { presetTitle, handleToggle, classList } = props;
  return (
    <a
      href="#"
      onClick={handleToggle}
      className={classList}
    >
      {presetTitle}
    </a>
  );
};

export default preset;

preset.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  classList: PropTypes.string.isRequired,
  presetTitle: PropTypes.string.isRequired
};
