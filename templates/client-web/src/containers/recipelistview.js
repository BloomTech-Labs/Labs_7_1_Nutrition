import React from 'react';
import axios from 'axios';
import Myrecipes from '../components/myrecipe.js';
import CustomForm from '../components/form.js';


class RecipeList extends React.Component {
    state = {
        recipes: []

    }
    componentDidMount() {
        axios.get(`localhost:8000/api/`)
        .then(res => {
            this.setState({
                recipes: res.data
            });
            console.log(res.data); 
        })
    }
    render() {
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
}
export default RecipeList;