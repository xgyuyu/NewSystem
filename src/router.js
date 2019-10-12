import React from 'react'
import App from './App'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/login/login'
import Home from './components/home/home'
export default class ERouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/Home" component={Home} />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
