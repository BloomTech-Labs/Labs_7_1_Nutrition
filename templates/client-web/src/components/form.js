import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class CustomForm extends React.Component {
	handleFormSubmit = (event, requestType, ingId) => {
		event.preventDefault();
		const cookTime = event.target.elements.CookTime.value;
		const cookingMethod = event.target.elements.CookingMethod.value;
		console.log(cookingMethod, cookTime); //data gets caught
		switch (requestType) {
			case 'post':
				return axios
					.post('http://127.0.0.1:8000/api/recipe/', {
						CookTime: cookTime,
						CookingMethod: cookingMethod
					})
					.then((res) => {
						console.log('success');
					})
					.catch((err) => console.log('there was an error'));

			case 'put':
				return axios
					.put(`http://127.0.0.1:8000/api/recipe/${ingId}/`, {
						CookTime: cookTime,
						CookingMethod: cookingMethod
					})
					.then((res) => console.log(res))
					.catch((err) => console.log(err));
		}
	};
	render() {
		return (
			<div>
				<Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.ingId)}>
					<FormItem label="Cook Time: ">
						<Input name="CookTime" placeholder="Give a title to your recipe..." />
					</FormItem>
					<FormItem label="Cooking Method: ">
						<Input name="CookingMethod" placeholder="Cooking instructions goes here..." />
					</FormItem>
					<FormItem label="Recipe Category: ">
						<Input name="RecipeCategory" placeholder="Cooking instructions goes here..." />
					</FormItem>
					<FormItem label="Recipe Cuisine: ">
						<Input name="RecipeCuisine" placeholder="So, what cusine is this?..." />
					</FormItem>
					<FormItem label="Recipe Instructions: ">
						<Input name="RecipeInstructions" placeholder="Creative instructions goes here..." />
					</FormItem>
					<FormItem label="Recipe Yield: ">
						<Input name="RecipeYield" placeholder="how many in number..." />
					</FormItem>
					<FormItem label="Suitable For Diet: ">
						<Input name="SuitableForDiet" placeholder="Suitable For what Diet..." />
					</FormItem>
					<FormItem label="Nutrition ">
						<Input name="Nutrition" placeholder="Dropdown will show up" />
					</FormItem>
					<FormItem label="Recipe Ingredients: ">
						<Input name="RecipeIngredients" placeholder="Ingredients goes here..." />
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit">
							{this.props.btnText}
						</Button>
					</FormItem>
				</Form>
			</div>
		);
	}
}
export default CustomForm;
