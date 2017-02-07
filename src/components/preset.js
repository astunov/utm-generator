import React from 'react';

const preset = (props) => {
  const { presetTitle, handleToggle, classList } = props;
  return (
      <a
        href="#"
        onClick={handleToggle}
        className={classList}>
      {presetTitle}
      </a>
  );
}

export default preset;