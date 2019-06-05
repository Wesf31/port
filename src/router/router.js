import React from 'react'
import { Switch, Route} from 'react-router-dom'
import { Home, Create, Products } from '../Loadable/Loadable'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path ="/Create" component={Create}/>
        <Route path ="/Products" component={Products}/>
    </Switch>
)