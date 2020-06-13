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
          <div className={`${this.props.className}`} onClick={this.props.handleClick}>{this.props.name}<img alt="cow" src="https://s3.amazonaws.com/kandipatternspatterns/animals/4331-Cow.png"></img></div>
          <p style={ this.props.className !== 'cow0' ? {display:'none'} : {display: 'block'} } className={`${this.props.className}description`}>{this.props.description}</p>
          
      </div>
    )
  }
}

export default Cow;
