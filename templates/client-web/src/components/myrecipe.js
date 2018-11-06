import React from 'react';
import { Table, Card } from 'antd';
import Axios from 'axios';

// Recipe list page
const Myrecipes = (props) => {
  const columns = [ {
    title: 'Suitable For Diet',
    dataIndex: 'SuitableForDiet',
  }, {
    title: 'Recipe Category',
    dataIndex: 'RecipeCategory',
  }, {
    title: 'Recipe Cuisine',
    dataIndex: 'RecipeCuisine',
  }, {
    title: 'Cooking Time',
    dataIndex: 'CookTime'
   }, {
    title: 'Recipe Yield',
    dataIndex: 'RecipeYield',
  }, {
    title: 'Recipe Ingredients',
    dataIndex: 'RecipeIngredients',
  }, {
    title: 'Recipe Instructions',
    dataIndex: 'RecipeInstructions',
  }]
    addRecipe = () => {
      axios
      .get(requestReviewsURL, config)
      .then(response => {
        this.setState({ data: { ... this.props.data, recipes: response.data } });
      })
      .catch(err => console.log(err.warn));
    };
    return (
      // MyRecipes displayed in table form
      <div>
        
        <h1> Here you will see your saved recipes in a table form.</h1>
        <Table
        itemLayout="vertical"
        size="large"
        pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
        dataSource={props.data}
        columns={columns}
        />
        <Card style={{ width: '100px', justifyContent: 'center' }}>
            <div>
              <h4> Add a new recipe</h4>
               <NewReviewModal 
                buttonLabel={'+'}
                addRecipe={this.addRecipe}
               />
            </div>
        </Card>
      </div>
 )
}

export default Myrecipes;