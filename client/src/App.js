
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {SET_CURRENT_USER} from './action/types';
//import { withRouter } from 'react-router';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { logoutUser } from './action/authActions';
import NewsFeed from './components/newsfeed/NewsFeed';
//import Forgotpassword from './components/auth/Forgotpassword';
import NewPassword from './components/auth/NewPassword';
import Profile from './components/profile/Profile';
import SinglePost from './components/post/SinglePost';
import CoverPic from './components/profile/CoverPic';



function App(props) {

 

  //const {history} = this.props.history
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
    //props.history.push('/login')
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
      <Route exact path = '/' component={Register}></Route>  
      <Route exact path = '/login' component={Login}></Route>
      <Route  exact path = '/newpassword/:token' component={NewPassword}></Route>
      <Route exact path = '/newsfeed' component={NewsFeed}></Route>
      <Route exact path = '/profile' component={Profile}></Route>
      <Route exact path="/post/:id" component={SinglePost}></Route>
      <Route exact path="/profilepic" component={CoverPic}></Route>


    </div>
  </Router>    
    </Provider>
  );
}

export default App;
