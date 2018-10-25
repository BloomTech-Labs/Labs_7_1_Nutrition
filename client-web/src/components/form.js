import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class CustomForm extends React.Component {
		handleFormSubmit = (event, requestType, ingId) => {
	/* 
	 CookTime = models.DurationField()
    CookingMethod = models.CharField(max_length=50)
    Nutrition = models.ForeignKey('NutritionInfo', on_delete=models.CASCADE)
    RecipeCategory = models.CharField(max_length=50)
    RecipeCuisine = models.CharField(max_length=50)
    RecipeIngredients = models.ForeignKey(
        'Ingredients', on_delete=models.CASCADE)
    RecipeInstructions = models.TextField()
    RecipeYield = models.IntegerField()
    SuitableForDiet = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)*/ 
			const cookTime= event.target.elements.CookTime.value;
			const cookingMethod = event.target.elements.CookingMethod.value;
			
			console.log(cookTime,cookingMethod)

			switch ( requestType ) {
				case 'post':
					return axios.post('http://127.0.0.1:8000/api/', {
						CookTime: cookTime,
						CookingMethod: cookingMethod
					})
					.then(res => console.log(res))
					.catch(err => console.log(err));
		
				case 'put':
					return axios.put(`http://127.0.0.1:8000/api/${ingId}/`, {
						CookTime: cookTime,
						CookingMethod: cookingMethod
						})
						.then(res => console.log(res))
						.catch(err => console.log(err));
			}
 		}
  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(
					event,
					this.props.requestType,
					this.props.ingId )}>
          <FormItem label="Cook Time: ">
            <Input name="CookTime" placeholder="Give a title to your recipe..." />
          </FormItem>
          <FormItem label="Cooking Method: ">
            <Input name="CookingMethod" placeholder="Cooking instructions goes here..." />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default CustomForm;
