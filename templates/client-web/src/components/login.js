import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
const FormItem = Form.Item;

class Login extends React.Component {
    render() {
        return (
            <div>
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
                        <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
export default Login;