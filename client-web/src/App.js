import React, { Component } from 'react';
import 'antd/dist/antd.css';  // from ant.design usage

import CustomLayout from './containers/layout.js';
import RecipeList from './containers/recipelistview.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <RecipeList />
        </CustomLayout> 
       
      </div>
    );
  }
}

export default App;
