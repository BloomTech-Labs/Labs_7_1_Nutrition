import React from 'react';
import Main from './components/main.js';
import Headers from './components/header.js';
import Footers from './components/footer.js';

const App = () => (
  <div>
    <h1> Don't eat that - Nutrition app </h1>
    <Headers />
    <Main />
    <Footers />
  </div>
);
export default App;
