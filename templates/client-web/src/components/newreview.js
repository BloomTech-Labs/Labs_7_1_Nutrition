import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
import CustomForm from '../components/form.js';

class NewReviewModal extends React.Component {
    
    render() {
        if(this.state.recipes.length !== 0) {
            // console.log("First row:  ",this.state.recipes[0].CookTime)
            return (
                <div> 
                    <h1> Hi, here are the list of recipes you have created.</h1> 
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
                    <h1>Hey there! Looks like you need to create recipes. </h1>
                    <h2>Create recipe</h2>
                    <Card style={{ width: 500 }}>

                    <CustomForm 
                        requestType="post"
                        ingId={null}
                        btnText="Create"/>
                    </Card>
            </div>
            )
        }
        
    }
}
export default NewReviewModal;