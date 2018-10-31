import React from 'react';
import Main from './components/main.js';
import Headers from './components/header.js';
import Footers from './components/footer.js';
//import AuthService from './components/authjwt';
//import withAuth from './components/withauth.js';
//const Auth = new AuthService();

class App extends React.Component {
//     handleLogout(){
//     Auth.logout()
//     this.props.history.replace('/login');
//  }
  render() {
    
    return(

      <div>
      <h1> Don't eat that - Nutrition app </h1>  
        <Headers />
        <Main />
      <Footers />
     </div>
     
    )
  }
  
}

export default App;

        //  //   <p className="App-intro">
    //  <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
    //   </p>
     
     
      
    