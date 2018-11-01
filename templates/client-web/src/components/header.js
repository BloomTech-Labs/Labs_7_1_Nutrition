import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'; 

const { Header } = Layout;
const Headers = () => (
    <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Sign In</Menu.Item>
            <Menu.Item key="2">Sign Up</Menu.Item>
            <Menu.Item key="3">Logout</Menu.Item>
          </Menu>
        </Header>
)
export default Headers;