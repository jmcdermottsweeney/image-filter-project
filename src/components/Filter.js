import React from 'react';
import Dropdown from './Dropdown.js';
import data from '../assets/tour-data.json';

function getSeasons(src) {
  return Object.keys(src).map((el) => {
    return <option className="Dropdown__option">{el}</option>;
  });
}

function getCategories(src, val) {
  let keys = Object.keys(src);
  let values = [];
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === val) {
      for (let h = 0; h < src[keys[i]].length; h++) {
        values.push(src[keys[i]][h]);
      }
    }
  }
  return values.map((el) => {
    return <option className="Dropdown__option">{el}</option>;
  });
}

function getDestination(src, val, name, country) {
  return src.map((el) => {
    if (el.category === val) {
      return <option className="Dropdown__option">{el[name]}</option>;
    }
  });
}

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      season: null,
      category: null,
      name: null,
      id: null
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ season: null });
    this.setState({ category: null });
    this.setState({ name: null });
  };

  handleSeason = (event) => {
    if (event.target.value.length === 0) {
      this.setState({ season: null });
    } else {
      this.setState({ season: event.target.value });
      this.setState({ category: null });
      this.setState({ name: null });
    }
  };

  handleCategory = (event) => {
    if (event.target.value.length === 0) {
      this.setState({ category: null });
    } else {
      this.setState({ category: event.target.value });
      this.setState({ name: null });
    }
  };

  handleDestination = (event) => {
    if (event.target.value.length === 0) {
      this.setState({ name: null });
    } else {
      this.setState({ name: event.target.value });
    }
  };

  render() {
    return (
      <div className="Filter__wrapper">
        <form className="Filter__form" onSubmit={this.handleSubmit.bind(this)}>
          <Dropdown
            src={data.seasonCategories}
            label="season"
            options={getSeasons(data.seasonCategories)}
            handleSelect={this.handleSeason.bind(this)}
          />
          <Dropdown
            src={data.seasonCategories}
            label="categories"
            options={getCategories(data.seasonCategories, this.state.season)}
            handleSelect={this.handleCategory.bind(this)}
            disabled={this.state.season === null}
          />
          <Dropdown
            src={data.destinations}
            label="destination"
            options={getDestination(
              data.destinations,
              this.state.category,
              'name'
            )}
            handleSelect={this.handleDestination.bind(this)}
            disabled={
              this.state.season === null || this.state.category === null
            }
          />
          <div className="Filter__submit__wrapper">
            <input className="Filter__submit" type="submit" value="Submit" />
          </div>
        </form>
        <p>
          {this.state.season} | {this.state.category} | {this.state.destination}
        </p>
      </div>
    );
  }
}

export default Filter;
