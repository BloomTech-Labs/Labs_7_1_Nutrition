import React from 'react';
import { Form, Input, Button } from 'antd';


//import axios from 'axios';
const FormItem = Form.Item;

class Login extends React.Component {
    constructor() {
        super();  
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.Auth.login(this.state.username, this.state.password)
        .then(res => {
            // this.props.history.replace('/');
        })
        .catch(err => {
            alert(err);
        })
    }
    componentWillMount() {
        if(this.Auth.loggedIn())
            this.props.history.replace('/');
    }
    render() {
        return (
            <div>
                <h2> You have successfully logged out.  </h2>
                <br />
                <h2> Do you want to sign in? </h2>
                <div>
                        <Button type="primary" htmlType="submit"> Back to home </Button>
                </div>
            </div>
        );
    }
}
export default Login;