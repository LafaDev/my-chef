import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Login from './pages/Login';
import MainFoods from './pages/MainFoods';
import MainDrinks from './pages/MainDrinks';
import Explorer from './pages/Explorer';
import ExploreIngredients from './pages/ExploreIngredients';
import ExploreNations from './pages/ExploreNations';
import Detail from './pages/Detail';
import Done from './pages/Done';
import ExplorerType from './pages/ExplorerType';
import Favorites from './pages/Favorites';
import Progress from './pages/Progress';
import Profile from './pages/Profile';

// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import MealAPIContextProvider from './contexts/MealAPIContex';

function App() {
  return (
    <Switch>
      <MealAPIContextProvider>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ MainFoods } />
        {/* <Route
        exact
        path="/foods"
        render={ (propRoute) => (<MainFoods { ...propRoute } />) }
      /> */}
        <Route exact path="/drinks" component={ MainDrinks } />
        {/*  */}
        <Route path="/foods" component={ Detail } />
        <Route path="/drinks/:id" component={ Detail } />
        {/*  */}
        <Route exact path="/foods/:id/in-progress" component={ Progress } />
        <Route exact path="/drinks/:id/in-progress" component={ Progress } />
        {/*  */}
        <Route exact path="/explore" component={ Explorer } />
        <Route exact path="/explore/foods" component={ ExplorerType } />
        <Route exact path="/explore/drinks" component={ ExplorerType } />
        <Route exact path="/explore/foods/nationalities" component={ ExploreNations } />
        <Route exact path="/explore/foods/ingredients" component={ ExploreIngredients } />
        <Route exact path="/explore/drinks/ingredients" component={ ExploreNations } />
        {/*  */}
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ Done } />
        <Route exact path="/favorite-recipes" component={ Favorites } />
      </MealAPIContextProvider>
    </Switch>
  );
}

export default App;
