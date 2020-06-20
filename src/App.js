import React, { useState } from 'react';
import './App.css';
import Error from './pages/Error';
import Navbar from './components/Navbar';
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
    </>
  );
}

export default App;
