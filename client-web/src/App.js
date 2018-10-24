import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';  // from ant.design usage

import CustomLayout from './containers/layout.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          
        </CustomLayout> 
       
      </div>
    );
  }
}

export default App;
