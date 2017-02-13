import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Preset from '../components/preset';
import { changeActivePreset } from '../actions/index';

class Presets extends Component {
  propTypes = {
    changeActivePreset: PropTypes.func
  }
  handleToggle = (e) => {
    e.preventDefault();
    const val = e.target.text.toLowerCase();
    this.props.changeActivePreset(val);
  }
  render() {
    const renderPresets = this.props.presets.list.map((preset) => {
      const { label } = preset;
      const classList = label === this.props.presets.activePreset ? 'collection-item active' : 'collection-item';
      const presetTitle = label[0].toUpperCase() + label.slice(1);
      return (
        <Preset
          key={presetTitle}
          handleToggle={this.handleToggle}
          presetTitle={presetTitle}
          classList={classList}
        />
      );
    });
    return (
      <div>
        <h5> Пресет </h5>
        <div className="collection">
          { renderPresets }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    presets: state.presets
  };
}

export default connect(mapStateToProps, { changeActivePreset })(Presets);
