import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './pages/Home'
import FeatureRooms from './pages/FeatureRooms'
import SingleRoom from './pages/SingleRoom'
import Navbar from './components/Navbar'

import './hotel.css'


function HotelApp() {
  return (
    <>
      <Router>
            <Navbar />
          <Switch>
                <Route exact path='/'>
                   <Home />
                </Route>
                <Route exact path='/rooms'>
                   <FeatureRooms />
                </Route>
                <Route exact path='/rooms/:slug'>
                   <SingleRoom />
                </Route>

          </Switch>


      </Router>
    </>
  )
}

export default HotelApp
