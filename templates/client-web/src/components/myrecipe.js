import React from 'react';
import { Table, Card } from 'antd';
import axios from 'axios';
import NewReviewModal from '../components/newreview.js';

// Recipe list page

class MyRecipes extends React.Component {
  state = {
    recipes: [
      {
        title: 'Suitable For Diet',
        dataIndex: 'All',
      }, {
        title: 'Recipe Category',
        dataIndex: 'Western',
      }, {
        title: 'Recipe Cuisine',
        dataIndex: 'Italian',
      }, {
        title: 'Cooking Time',
        dataIndex: '30'
       }, {
        title: 'Recipe Yield',
        dataIndex: '4',
      }, {
        title: 'Recipe Ingredients',
        dataIndex: 'RecipeIngredients',
      }, {
        title: 'Recipe Instructions',
        dataIndex: 'RecipeInstructions',
      }
    ]
    // const requestReviewsURL = ''; requestReviewsURL, config
  }
  
  // console.log("myrecipe");
  // const columns = [ {
  //   title: 'Suitable For Diet',
  //   dataIndex: 'SuitableForDiet',
  // }, {
  //   title: 'Recipe Category',
  //   dataIndex: 'RecipeCategory',
  // }, {
  //   title: 'Recipe Cuisine',
  //   dataIndex: 'RecipeCuisine',
  // }, {
  //   title: 'Cooking Time',
  //   dataIndex: 'CookTime'
  //  }, {
  //   title: 'Recipe Yield',
  //   dataIndex: 'RecipeYield',
  // }, {
  //   title: 'Recipe Ingredients',
  //   dataIndex: 'RecipeIngredients',
  // }, {
  //   title: 'Recipe Instructions',
  //   dataIndex: 'RecipeInstructions',
  // }];
    addRecipe = () => {
      axios
      .get()
      .then(response => {
        this.setState({ data: { ... this.recipes, recipes: response.data } });
      })
      .catch(err => console.log(err.warn));
    };
    render() {
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
          dataSource={this.recipes}
          // columns={columns}
          />
          <Card style={{ width: '100px', justifyContent: 'center' }}>
              <div>
                <h4> Add a new recipe</h4>
                 {/* <NewReviewModal 
                  buttonLabel={'+'}
                  addRecipe={this.addRecipe}
                 /> */}
              </div>
          </Card>
        </div>
   )
  }
    
}


export default MyRecipes;