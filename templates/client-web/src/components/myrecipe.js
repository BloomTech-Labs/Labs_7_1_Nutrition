import React from 'react';
import { Table, Card } from 'antd';
import axios from 'axios';
import NewReviewModal from '../components/newreview.js';
import RecipeList from '../containers/recipelistview.js';

const config = {
  headers: {
    JWT: localStorage.getItem('jwt')
  }
};
class MyRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        recipes: []
      }
    };
  }
  componentDidMount = () => {
    const username = localStorage.getItem('username');
    if(username) {
          axios.get(`http://127.0.0.1:8000/api/recipe/${username}`)
      .then(
        axios.spread(res => {
          console.log("Recipelist View data: ",res.data);
          this.setState({
              recipes: res.data
          });
      })
      )
      .catch(err => console.log("recipelist view error:", err));
      this.props.history.push('/recipe');
  
      } else {
          this.props.history.push('/login');
      }
      const token = localStorage.getItem('token');
      
  }
  addRecipe = () => {
    axios
    .get()
    .then(response => {
      this.setState({ data: { ... this.recipes, recipes: response.data } });
    })
    .catch(err => console.log(err.warn));
  };

  render() {
    <div>
          <h1> Here you will see your saved recipes.</h1>
          <h4>If you have recipes under your username, you will be seeing card view</h4>
          <h4>Otherwise by clicking center of the screen you can add recipes</h4>
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
                 <NewReviewModal 
                  buttonLabel={'+'}
                  addRecipe={this.addRecipe}
                 />
              </div>
          </Card>
          <Card style={{ width: '100px', justifyContent: 'center' }}>
              {this.state.data.recipes.map(recipe => {
                return (
                  <RecipeList 
                  {... recipe}
                  removeReview={this.handleRemove}
                  />
                );
              })}
          </Card>
        </div>
    return (
      <div>
        {this.state.data.recipes.length === 0 ? fullScreenView : recipeCardList}
      </div>
    )
  }
}
export default MyRecipes;