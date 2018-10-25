import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes.js';
import 'antd/dist/antd.css';  // from ant.design usage

import CustomLayout from './containers/layout.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter/>
        </CustomLayout> 
        </Router>
      </div>
    );
  }
}

export default App;
