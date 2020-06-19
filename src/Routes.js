import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

const routes = {
    "/": () => <Home />,
    "/rooms": () => <Rooms />,
    "/rooms/:slug": ({slug}) => <SingleRoom />
  };

  export default routes;