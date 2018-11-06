import React from 'react'
import { Switch, Route } from 'react-router-dom'
import WelcomeToDevTinder from './WelcomeToDevTinder';
import DeveloperPage from './DeveloperPage';
import CustomerPage from './CustomerPage';

// The Main component renders one of the three provided
// Routes (provided that one matches).

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={WelcomeToDevTinder}/>
      <Route path='/developer' component={DeveloperPage}/>
      <Route path='/customer' component={CustomerPage}/>
    </Switch>
  </main>
)

export default Main
