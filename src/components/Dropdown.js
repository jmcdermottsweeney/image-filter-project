import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.value = '';
  }

  render() {
    return (
      <div className="Dropdown__wrapper">
        <label className="Dropdown__label">{this.props.label}</label>
        <select
          className="Dropdown__select"
          value={this.props.value}
          onChange={this.props.handleSelect}
          disabled={this.props.disabled}
        >
          <option className="Dropdown__option" value={null}></option>
          {this.props.options}
        </select>
      </div>
    );
  }
}

export default Dropdown;
