import React from 'react'
import App from './App'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Login from './components/login/login'
import Home from './components/home/home'
import User from './components/user/user'
import Main from './components/main/main'

export default class ERouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/user" component={User} />
                        <Route path="/main" component={Main} />
                        <Route path="/" component={Home} />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
