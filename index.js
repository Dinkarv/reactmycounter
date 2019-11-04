import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Form from './Components/Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  incCounter = (e) =>{
    console.log(e.target.name)
    if(e.target.name == 'one'){
      let n = this.state.number+1
      this.setState({
        number: n
      })
    }else{
      let n = this.state.number+10
      this.setState({
        number: n
      })
    }
  }

  render() {
    return (
      <div>
        <Hello name={this.state.number} />
        <p>
          <Form inc={this.incCounter}/>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
