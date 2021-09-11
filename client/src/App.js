
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {SET_CURRENT_USER} from './action/types';
import Login from './components/auth/Login';
import { logoutUser } from './action/authActions';
import NewsFeed from './components/newsfeed/NewsFeed';
import NewPassword from './components/auth/NewPassword';
import Profile from './components/profile/Profile';
import SinglePost from './components/post/SinglePost';
import Forgotpassword from './components/auth/Forgotpassword';
import Suggestion from './components/suggestion/Suggestion';
import PrivateRoute from "./components/common/PrivateRoute";




function App(props) {

 
  if (localStorage.jwtToken) {
    //decode
    const decoded = jwt_decode(localStorage.jwtToken);
    
    //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //Redirect user login
    window.location.href = "/login";
    
  }
    //Set auth header
    
    setAuthToken(localStorage.jwtToken);
    //dispatch
    store.dispatch({
      type: SET_CURRENT_USER,
      payload: decoded,
    });    
  }


  return (
    <Provider store={store}>
  <Router>
    <div className="App">
      <Route exact path = '/' component={Login}></Route> 
      <Route exact path = '/login' component={Login}></Route>
      <Route  exact path = '/newpassword/:token' component={NewPassword}></Route>
      <Route  exact path = '/Forgotpassword' component={Forgotpassword}></Route>
      <Switch>
      <PrivateRoute exact path = '/newsfeed' component={NewsFeed}/>
      </Switch>
      <Switch>
      <PrivateRoute exact path = '/profile' component={Profile}/>
      </Switch>
      <Switch>
      <PrivateRoute exact path="/post/:id" component={SinglePost}/>
      </Switch>
      <Switch>
      <PrivateRoute exact path="/profile/:id" component={Profile}/> 
      </Switch>  
      <Switch>
      <Route  exact path = '/suggestions' component={Suggestion}></Route>
      </Switch>
     


      

    </div>
  </Router>    
    </Provider>
  );
}

export default App;
