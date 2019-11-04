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

  render() {
    return (
      <div>
        <Hello name={this.state.number} />
        <p>
          <Form/>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
