import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Create from '../../Components/Posts/create'
import Home from '../../Components/Home'
import Posts from '../../Components/Posts'
import { SignIn } from '../../Components/Auth'

const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signin' component={SignIn}/>
            <Route exact path='/post' component={Posts}/>
            <Route path='/post/create' component={Create}/>
        </Switch>
    </div>
)

export default Main
