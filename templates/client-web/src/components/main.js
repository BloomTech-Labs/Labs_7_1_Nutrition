import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipeList from '../containers/recipelistview.js';
import IngredientDetail from '../containers/ingredientdetailview.js';
import Login from '../components/login.js';
import Logout from '../components/logout.js';
import { Layout } from 'antd';

const { Content } = Layout;
const Main = () => (
    <Content style={{ padding: '0 50px' }}>
        <Switch>
            
            <Route path='/' component={RecipeList} />
            <Route exact path='/login' component={Login} />
            <Route path='/ing/:ingredientid' component={IngredientDetail} />
            <Route exact path='/logout' component={Logout} />
        </Switch>
    </Content>

)
    

export default Main;