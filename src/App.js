import NavBar from './Components/navbar.js';
import AllData from './Components/alldata.js';
import Balance from './Components/balance.js';
import CreateAccount from './Components/createaccount.js';
import Deposit from './Components/deposit.js';
import Withdraw from './Components/withdraw.js';
import Home from './Components/home.js';
import Login from './Components/login.js';
import UserContext from'./Components/context.js';
import React from 'react';

import {
  Route,
  HashRouter,
} from 'react-router-dom';


function App() {
    return (
      <HashRouter>
        <NavBar/>
        <UserContext.Provider value={{users:[{name:'Mongoose ',email:'email@gmail.com',password:'1234',balance:100}]}}>
          <div className="container" style={{padding: "20px"}}>
          <Route path='/' exact component={Home} />
            <Route path='/createaccount/' component={CreateAccount} />
            <Route path='/login/' component={Login} />
            <Route path='/balance/' component={Balance} />
            <Route path='/withdraw/' component={Withdraw} />
            <Route path='/deposit/' component={Deposit} />
            <Route path='/alldata/' component={AllData} />
          </div>
        </UserContext.Provider>      
      </HashRouter>
    );
  }
  

export default App;