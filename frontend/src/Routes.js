import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import Gallery from './components/Gallery'
import Detail from './components/Detail'


export default () => (
<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/detail/:id" component={Detail} />
    
</Switch>
)
