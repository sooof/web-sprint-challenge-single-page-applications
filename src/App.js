import React from "react";
import {Route, Link, Switch} from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <nav className='App-header'>
          <h1>Lambda Eats</h1>
          
          <div className='App-link'>
            <Link to='/'>Home</Link>
            <Link to='/items-list'>Help</Link>
          </div>
      </nav>

      <Switch>
        <Route exact path='/'>
          {/* <Home/> */}
        </Route>
        <Route>

        </Route>
      </Switch>
    </div>
 
  );
};
export default App;
