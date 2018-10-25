import React from 'react';
import { Route } from 'react-router-dom';

import RecipeList from './containers/recipelistview.js';
import IngredientDetail from './containers/ingredientdetailview.js';
const BaseRouter = () => (
    <div>
        <Route exact path='/' component={RecipeList} />
        <Route exact path='/:ingredientid' component={IngredientDetail} />
    </div>
);

export default BaseRouter;