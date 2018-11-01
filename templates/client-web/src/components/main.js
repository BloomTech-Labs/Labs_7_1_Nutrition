import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RecipeList from '../containers/recipelistview.js';
import IngredientDetail from '../containers/ingredientdetailview.js';
import Login from '../components/login.js';
import Register from '../components/register.js';
import Logout from '../components/logout.js';
import { Layout } from 'antd';

const { Content } = Layout;
const Main = () => (
    <Content style={{ padding: '0 50px' }}>
        <Switch>
            
            <Route path='/recipe' component={RecipeList} />
            <Route path='/' component={Register} />
            <Route path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path='/ing/:ingredientid' component={IngredientDetail} />
            <Route path='/logout' component={Logout} />
        </Switch>
    </Content>

)

export default Main;