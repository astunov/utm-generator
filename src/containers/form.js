import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select';
import 'react-select/dist/react-select.min.css'


class Form extends Component {
  state = {
    form: {
      utm: '',
      source: {
        val: '',
        options: [
          { value: 'email-eMS', label: 'EMS' },
          { value: 'email-MT', label: 'Metak' }
        ]
      }
    }
  }
  componentWillReceiveProps() {
    this.setState({
      form: {
        utm: '',
        source: {
          val: ''
        }
      }
    });
  }
  handleSourceChange = (value) => {
    const { val } = this.state.form.source;
    this.setState((prevState) => {
      return {
        form: {
          source: {
            val: value
          }
        }
      }
    });
  }

  generateUtm = () => {
    return this.state.form.source.val.value;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('lol');
    this.setState({
      form: {
        utm: 'lol',
        source: {
          val: ''
        }
      }
    });
  }

  render() {
    const { source } = this.state.form;
    const options = this.props.preset.fields.utmSource;

    return (
      <form onSubmit={this.handleSubmit}>
        <Select
          name="form-field-name"
          value={source.val}
          options={options}
          onChange={this.handleSourceChange}
        />
        <div className="input-field">
          <textarea id="textarea1" className="materialize-textarea" value={this.state.form.utm}></textarea>
        </div>
        <button className="waves-effect waves-light btn"> Submit </button>
      </form>
    );
  }

}

function mapStateToProps(state) {
  return {
    common: state.presets.common,
    preset: state.presets.list.filter((preset) => preset.label === state.presets.activePreset)[0]
  }
}

export default connect(mapStateToProps)(Form);

