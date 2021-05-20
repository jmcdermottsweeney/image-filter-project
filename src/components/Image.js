import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.value = '';
  }

  render() {
      return (
          <div className="Image__wrapper">
              <img src={this.src} alt={this.alt}></img>
          </div>
      );
  }
}

export default Image;