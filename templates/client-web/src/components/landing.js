import React from 'react';

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
                <img alt="Landing page image comes here" src="../image/cooking-food-ginger.jpg" height="400px" width="500px" />
            </div>
        )
    }
}
export default Landing;