
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {SET_CURRENT_USER} from './action/types';

import Register from './components/auth/Register';
import Login from './components/auth/Login';



function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Route exact path = '/' component={Register}></Route>  
      <Route exact path = '/login' component={Login}></Route>      
    </div>
    </Router>
    </Provider>
  );
}

export default App;
