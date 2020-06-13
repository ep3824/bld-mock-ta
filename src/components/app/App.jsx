import React from 'react';
import Cow from './Cow';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      newCowName: '',
      newCowDescription: '',
      showcasedCow: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addCow = this.addCow.bind(this);
    this.rerender = this.rerender.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/cows')
      .then(response => response.json())
      .then(data => this.setState({
        cows: data,
        showcasedCow: data[0]
      }));
  }

  handleClick(e) {
    let length = e.target.className.length
    let cowNum = Number(e.target.className.substring(3, length))
    let updateState = this.state.cows
    updateState.unshift(this.state.cows[cowNum])
    updateState.splice(cowNum + 1, 1)
    this.setState({
      cows: updateState
    })
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  addCow(e) {
    e.preventDefault();
    let data = {
      name: this.state.newCowName,
      description: this.state.newCowDescription
    }
    fetch('http://localhost:8080/api/cows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(data => this.rerender())
    .catch((error) => {
      console.error("ERROR", error)
    })
  }

  rerender() {
    fetch('http://localhost:8080/api/cows')
      .then(response => response.json())
      .then(data => this.setState({
        cows: data
      }));
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>Cow List</h1>
          {this.state.cows.map((cow, i) => 
            <Cow 
            name={cow.name} 
            description={cow.description} 
            className={`cow${i}`}
            handleClick={this.handleClick}
            key={i}/>
            )}
        </header>
        <h2>Add a new Cow:</h2>
        <form onSubmit={this.addCow}>
          <input type="text" name="newCowName" placeholder="name" value={this.state.newCowName} onChange={this.handleChange}></input>
          <input type="text" name="newCowDescription" placeholder="description" value={this.state.newCowDescription} onChange={this.handleChange}></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
