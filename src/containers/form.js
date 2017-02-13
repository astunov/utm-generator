import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select';
import 'react-select/dist/react-select.min.css';

import { changeValue } from '../actions/form';

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
  };
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
  // handleSourceChange = (value) => {
  // }

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

  renderFormFields = (fields) => {
    return fields.map((field) => {
      const { type, values, title } = field;
      switch (type) {
        case ('select'):
          return (
            <Select
              name="form-field-name"
              key={title}
              value=""
              options={values}
            />
          );
        default:
          return (
            <div className="input-field">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">placeholder</label>
            </div>
          );
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        { this.renderFormFields(this.props.preset.fields) }
        <div className="input-field">
          <textarea id="textarea1" className="materialize-textarea" value={this.state.form.utm} />
        </div>
        <button className="waves-effect waves-light btn"> Submit </button>
      </form>
    );
  }

}

function mapStateToProps(state) {
  return {
    common: state.presets.common,
    preset: state.presets.list.filter(preset => preset.label === state.presets.activePreset)[0]
  };
}

export default connect(mapStateToProps, { changeValue })(Form);
