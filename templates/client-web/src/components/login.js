import React from 'react';
import { Form, Input, Button } from 'antd';
//import AuthService from './authjwt.js';

import axios from 'axios';
const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
				super(props);
				this.state = {
					username: '',
					password: '',
				};
				this.handleChange = this.handleChange.bind(this);
				//this.handleNewUser = this.handleNewUser.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        //this.Auth = new AuthService();        
		}
		handleChange(e) {
			this.setState({
					[e.target.name]: e.target.value,
			});
	}
    handleFormSubmit = (event) => {
				event.preventDefault();
				const {
					username,
					password,
				} = this.state;

				console.log("Username, password state: ",this.state);
        axios.post('http://127.0.0.1:8000/auth/login/', {
            username,
            password,
					})
        .then((res) => {
					console.log("success", res.data);
					localStorage.setItem('token', res.data.jwt);
					//localStorage.setItem('username', res.data.newUser.name);
				
					console.log("after successful axios call", {status: res.status});
				})
        .catch(err => {
					console.log("there was an error", err);
					this.setState({
						password: '',
						confirmPassword: '',
					});
				}
    )
        // this.Auth.login(this.state.username, this.state.password)
        // .then(res => {
        //     this.props.history.replace('/');
        // })
        // .catch(err => {
        //     alert(err);
        // })
    }
    // componentWillMount() {
    //     if(this.Auth.loggedIn())
    //         //this.props.history.replace('/');
    // }
    render() {
        return (
            <div>
                <h2>Sign in here: </h2>
                <Form onSubmit={(event) => this.handleFormSubmit(
					event )}>
                    <FormItem label="Username : ">
												<Input 
													name="username" 
													placeholder="Username..." 
													onChange={this.handleChange}/>
                    </FormItem>
										<FormItem label="Password : ">
												<Input 
													name="password" 
													placeholder="Mix of 8 chars, numbers and symbols..." 
													onChange={this.handleChange}/>
                    </FormItem>
                    <FormItem>
												<Button 
													type="primary" 
													htmlType="submit" 
													// onClick={this.handleNewUser}
													> 
													Sign Up
													</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Login;