import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Navbar from './components/Navbar'

import './hotelclone.css'


function HotelCloneApp() {
  return (
    <div>
    
      <Router>
          <Navbar />
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route exact path='/rooms'>
            <Rooms />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default HotelCloneApp
