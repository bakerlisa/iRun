import './App.css';

import { Switch,Route,Link,Redirect } from 'react-router-dom';

import Home from './views/Home';
import Error from './views/Error';
import Fueling from './views/Fueling';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faFacebook } from '@fortawesome/fontawesome-free-solid'
import { faFacebook,faTwitter,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'
import Newsletter from './components/newsletter';


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
            <div className="socialWrp">
              <a href="" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>

          <div className="col-4">

          </div>
          <div className="col-4"></div>

          <div className="col-4">
            <Newsletter />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
