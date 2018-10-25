import React from 'react';
import axios from 'axios';

import { Card } from 'antd';
import CustomForm from '../components/form.js';

class IngredientDetail extends React.Component {
    state = {
        ingredients: {}

    }
    componentDidMount() {
        const ingId = this.props.match.params.ingredientID;
        axios.get(`http://127.0.0.1.8000/api/${ingId}`)
        .then(res => {
            this.setState({
                ingredients: res.data
            });
            console.log(res.data); 
        })
    }
    render() {
        return (
            <div>
                <Card title={this.state.ingredients.title}> 
				    <p>{this.state.ingredients.details}</p>
                </Card>
                <CustomForm 
                requestType="put"
                ingId={this.props.match.params.ingId}/>
            </div>
            
        )
    }
}
export default IngredientDetail;