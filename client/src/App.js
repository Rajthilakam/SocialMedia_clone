
import './App.css';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {SET_CURRENT_USER} from './action/types';
import { withRouter } from 'react-router';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { logoutUser } from './action/authActions';
import NewsFeed from './components/landing/NewsFeed';



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
    //window.location.href = "/login";
    props.history.push('/login')
  }
    //Set auth header
    
    setAuthToken(localStorage.jwtToken);
    //dispatch
    store.dispatch({
      type: SET_CURRENT_USER,
      payload: decoded,
    });
    
    //props.history.push('/newsfeed')
    //window.location.href = "/newsfeed";
  
    
  }
  return (
    <Provider store={store}>
    
    <div className="App">
      <Route exact path = '/' component={Register}></Route>  
      <Route exact path = '/login' component={Login}></Route>
      <Route exact path = '/newsfeed' component={NewsFeed}></Route>



    </div>
    
    </Provider>
  );
}

export default withRouter(App);
