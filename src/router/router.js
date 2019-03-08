import React from 'react'
import { Switch, Route} from 'react-router-dom'
import { Home, Create } from '../Loadable/Loadable'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path ="/Create" component={Create}/>
    </Switch>
)