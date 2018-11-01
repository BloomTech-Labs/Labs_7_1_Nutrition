import React from 'react';
import { Form, Input, Button } from 'antd';


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
				this.handleLogin = this.handleLogin.bind(this);
        //this.handleConflictSubmit = this.handleConflictSubmit.bind(this);        
		}
		handleChange(e) {
			this.setState({
					[e.target.name]: e.target.value,
			});
	}
    handleLogin = (event) => {
				event.preventDefault();
				if (!this.state.username || !this.state.password) {
					alert('Please provide username and password');
					this.setState({
						error: true,
						message: 'Please provide username and password',
					});
				} else {
					const {
						username,
						password,
					} = this.state;
	
					console.log("Username, password state: ",this.state);
					localStorage.setItem('username', this.state.username);
					axios.post(`http://127.0.0.1:8000/auth/login/`, {
							username,
							password,
						})
					.then((res) => {
						console.log("success", res.data);
						localStorage.setItem('token', res.data.jwt);
						
						console.log("just username:", res.data.username);
						console.log("after successful axios call", {status: res.status});
						this.setState({
							error: false,
						});
						this.props.history.push('/recipe');
					})
					.catch(err => {
						console.log("there was an error", err);
						this.setState({
							password: '',
						});
					}
				)
				}
				
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
            <div >
                <h2>Login here: </h2>
                <Form onSubmit={(event) => this.handleLogin(event)}>
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
													> 
													Sign In
												</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Login;