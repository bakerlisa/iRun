import './App.css';
import { Switch,Route,Link,Redirect } from 'react-router-dom';

import Home from './views/Home';
import Error from './views/Error';
import Fueling from './views/Fueling';
import Footer from './components/Footer';
import Recipe from './views/Recipe';
import AddRecipe from './views/AddRecipe';


function App() {
  return (
    <>
      <div className="App">
        <nav>
          <div className="logo">iRun</div>
          <Link to="/">Home</Link>
          <Link to="/fueling">Fueling</Link>
          <Link to="/calorie-counter">Calroies Counter</Link>
          <Link to="/race">Race</Link>
          <Link to="/connect">Connect</Link>
          <Link to="/expert">Expert</Link>
          <Link to="/train">Train</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          
          <Route exact path="/fueling">
            <Fueling />
          </Route>

          {/* RECIPE */}
          <Route exact path="/recipe/:id">
            <Recipe />
          </Route>

          <Route exact path="/new/recipe">
            <AddRecipe />
          </Route>


          {/* ERROR */}
          <Route exact path="/404">
            <Error />
          </Route>

          <Route><Redirect to="/404" /></Route>

        </Switch>
      </div>
      <Footer />
      
    </>
  );
}

export default App;
