import React from 'react';
import ImageContainer from '../containers/imageContainer.js';
//import { Avatar } from 'antd';


class Landing extends React.Component {
   constructor() {
       super();
       this.state = {
           username: '',
           token: '',
       }
   }
    render() {
        return (
            <div >
                <h1>Don't eat that --->Choose Nutrition App</h1>
                <ImageContainer />
            </div>
        )
    }
}
export default Landing;