import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class CustomForm extends React.Component {
		handleFormSubmit = (event, requestType, ingId) => {
			event.preventdefault();
			const title = event.target.elements.title.value;
			const content = event.target.elements.content.value;
			console.log(title,content);

			switch ( requestType ) {
				case 'post':
					axios.post('http://127.0.0.1:8000/api/', {
						title: title,
						content: content
					})
					.then(res => console.log(res))
					.catch(err => console.log(err));
					break;
				case 'put':
					axios.put(`http://127.0.0.1:8000/api/${ingId}/`, {
							title: title,
							content: content
						})
						.then(res => console.log(res))
						.catch(err => console.log(err));
					break;

				default:
			}
 		}
  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(
					event,
					this.props.requestType,
					this.props.ingId )}>
          <FormItem label="Title">
            <Input name="title" placeholder="Give a title here..." />
          </FormItem>
          <FormItem label="content">
            <Input name="content" placeholder="enter some content..." />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default CustomForm;
