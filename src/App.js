import React, { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';

import {Route, Switch} from 'react-router-dom';

import { useRoutes, A } from 'hookrouter';
import Routes from './Routes';

function App() {
  const routeResult = useRoutes(Routes);

  const [ path, setPath ] = useState("/")
  return (
    <>
    <Navbar></Navbar>
      <A href="/"></A>
      <A href="/rooms"></A>
      <A href="/rooms/:slug"></A>
      {routeResult || <Error></Error>}


    
    {/* Switch enforces that only one component can be shown at a time, 
        so if no component matches a path, then Error will be shown by default. */}
    
    {/* <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/rooms/" component={Rooms}></Route>
      <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
      <Route component={Error}></Route>
    </Switch> */}


    </>
  );
}

export default App;
