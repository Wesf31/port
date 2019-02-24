import React from 'react'
import { Switch, Route} from 'react-router-dom'
import { Home } from '../Loadable/Loadable'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path ="/create" component={Create}/>
    </Switch>
)