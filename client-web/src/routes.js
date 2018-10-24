import React from 'react';
import { Route } from 'react-router-dom';

import RecipeList from './containers/recipelistview.js';
const BaseRouter = () => (
    <div>
        <Route exact path='/' component={RecipeList} />
        <Route exact path='/:ingredientid' component={RecipeList} />
    </div>
);

export default BaseRouter;