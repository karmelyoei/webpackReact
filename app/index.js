import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

class App extends Component {
  render() {
    return <div>Hello K3</div>;
  }
}

render(<App />, document.getElementById('root'));

export default App;
