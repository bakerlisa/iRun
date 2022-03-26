import './App.css';

import { Switch,Route,Link,Redirect } from 'react-router-dom';

import Home from './views/Home';
import Error from './views/Error';
import Fueling from './views/Fueling';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoneyBill } from '@fortawesome/pro-solid-svg-icons';
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';


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

          <Route path exact="/">
            <Home/>
          </Route>

          <Route path exact="/fueling">
            <Fueling />
          </Route>

          <Route path exact="/calorie-counter">

          </Route>

          <Route path exact="/race">

          </Route>

          <Route path exact="/connect">

          </Route>

          <Route path exact="/expert">

          </Route>

          <Route path exact="/train">

          </Route>

          {/* ERROR */}
          <Route exact path="/404">
            <Error />
          </Route>

          <Route><Redirect to="/404" /></Route>

        </Switch>
      </div>

      <footer>
        <div className="container">
          <div className="col-4">
            <h5>iRun</h5>
            <p>This is a our missiona nd what we stand for and why we do what we do</p>
            <FontAwesomeIcon icon={faCode} />
          </div>

          <div className="col-4">

          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
      </footer>
    </>
  );
}

export default App;
