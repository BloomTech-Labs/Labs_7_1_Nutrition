// import React from 'react';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import { Link } from 'react-router-dom'; 

// const { Header } = Layout;
// const Headers = () => (
//     <Header>
//           <div className="logo" />
//           <Menu
//             theme="dark"
//             mode="horizontal"
//             defaultSelectedKeys={['2']}
//             style={{ lineHeight: '64px' }}
//           >
//             <Menu.Item key="1">Sign In</Menu.Item>
//             <Menu.Item key="2">Sign Up</Menu.Item>
//             <Menu.Item key="3">Logout</Menu.Item>
//           </Menu>
//         </Header>
// )
// export default Headers;

import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom'; 

const { Header } = Layout;
class Headers extends React.Component {
  handlelogout = () => {
    this.props.history.push('/');
    localStorage.removeItem('username','');
    localStorage.removeItem('token', '');
    
  }
  render () {
    const username = localStorage.getItem('username');
    // handleClick = (e) => {
    //   <Redirect
    // }
  if(username) {
    return (
      <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Hi {username}</Menu.Item>
            <Menu.Item key="3"><Link to={"/logout"}>Logout</Link></Menu.Item>
            {/* onClick={this.handlelogout} */}
          </Menu>
        </Header>
    )
  } else {
      return (
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to={"/login"}>Sign In</Link></Menu.Item>
            <Menu.Item key="2"><Link to={"/register"}>Sign Up</Link></Menu.Item>
          </Menu>
        </Header>
      )
  }
}
  
}

export default Headers;