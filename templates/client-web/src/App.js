import React from 'react';
import Main from './components/main.js';
import Headers from './components/header.js';
import Footers from './components/footer.js';


class App extends React.Component {
  render() {
    return(
      <div> 
        <Headers />
        <img src="https://hugtampabay.org/wp-content/uploads/2018/02/healthy-cooking-classes-in-Canada.jpg" alt="cooking-image" />
        <Main />
        <Footers />
     </div>
    )
  } 
}

export default App;
     
     
      
    