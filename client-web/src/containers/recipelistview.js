import React from 'react';
import axios from 'axios';
import Myrecipes from '../components/myrecipe.js';
import CustomForm from '../components/form.js';


class RecipeList extends React.Component {
    state = {
        recipes: []

    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/recipe/`)
        .then(res => {
            //console.log("Recipelist View: ",res.data);
            this.setState({
                recipes: res.data
            });
        })
	    .catch(err => console.log(err));
		
    }
    render() {
        if(this.state.recipes.length !== 0) {
            // console.log("First row:  ",this.state.recipes[0].CookTime)
            return (
                <div> 
                    <Myrecipes data={this.state.recipes} />
                    <br />
                    <h2>Create recipe</h2>
                    <CustomForm 
                        requestType="post"
                        ingId={null}
                        btnText="Create"/>
                </div>
                
            )
        }
        else {
            return (
                <div>      
            <h2>page not found</h2>
            </div>
            )
        }
        
    }
}
export default RecipeList;