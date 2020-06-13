import React from 'react';

class Cow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showcasedCow: ''
    };
  }

  render() {
    return (
      <div className="cow">
          <h2>{this.props.name}</h2>
          <h3>{this.props.description}</h3>
      </div>
    )
  }
}

export default Cow;
