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
import NotFound from './pages/NotFound';

// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import GeneralAPIContextProvider from './contexts/GeneralAPIContext';
import DetailsAPIContextProvider from './contexts/DetailsAPIContext';
import FilterContextProvider from './contexts/FilterContext';

function App() {
  return (
    <Switch>
      <GeneralAPIContextProvider>
        <DetailsAPIContextProvider>
          <FilterContextProvider>
            <Route exact path="/" component={ Login } />
            <Route exact path="/foods" component={ MainFoods } />
            {/* <Route
            exact
            path="/foods"
            render={ (propRoute) => (<MainFoods { ...propRoute } />) }
          /> */}
            <Route exact path="/drinks" component={ MainDrinks } />
            <Route exact path="/foods/:id" component={ Detail } />
            <Route exact path="/drinks/:id" component={ Detail } />
            <Route exact path="/foods/:id/in-progress" component={ Progress } />
            <Route exact path="/drinks/:id/in-progress" component={ Progress } />
            <Route exact path="/explore" component={ Explorer } />
            <Route exact path="/explore/foods" component={ ExplorerType } />
            <Route exact path="/explore/drinks" component={ ExplorerType } />
            <Route
              exact
              path="/explore/foods/nationalities"
              component={ ExploreNations }
            />
            <Route
              exact
              path="/explore/foods/ingredients"
              component={ ExploreIngredients }
            />
            <Route
              exact
              path="/explore/drinks/ingredients"
              component={ ExploreIngredients }
            />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/done-recipes" component={ Done } />
            <Route exact path="/favorite-recipes" component={ Favorites } />
            <Route component={ NotFound } />
          </FilterContextProvider>
        </DetailsAPIContextProvider>
      </GeneralAPIContextProvider>
    </Switch>
  );
}

export default App;
