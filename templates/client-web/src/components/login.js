import React from 'react';
import { Form, Input, Button } from 'antd';
import AuthService from './authjwt.js';

//import axios from 'axios';
const FormItem = Form.Item;

class Login extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();        
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.Auth.login(this.state.username, this.state.password)
        .then(res => {
            this.props.history.replace('/');
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
                <h2>Sign up here: </h2>
                <Form onSubmit={(event) => this.handleFormSubmit(
					event )}>
                    <FormItem label="Login : ">
                        <Input name="login" placeholder="Username..." />
                    </FormItem>
                    <FormItem label="Password : ">
                        <Input name="password" placeholder="Mix of 8 chars, numbers and symbols..." />
                    </FormItem>
                    <FormItem label="Confirm Password : ">
                        <Input name="confirmpassword" placeholder="Same as above..." />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit"> Sign Up</Button>
                    </FormItem>
                </Form>
            </div>
        );
        handleChange(e){
            this.setState(
                {
                    [e.target.name]: e.target.value
                }
            )
        }
    }
}
export default Login;