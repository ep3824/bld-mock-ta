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
      <div>
          <div className="showcase">{this.state.showcasedCow}</div>
          <div className={`${this.props.className}`} onClick={this.props.handleClick}>{this.props.name}</div>
          <p style={ this.props.className !== 'cow0' ? {display:'none'} : {display: 'block'} } className={`${this.props.className}description`}>{this.props.description}</p>
      </div>
    )
  }
}

export default Cow;
