import React, { Component } from 'react'
import { Route, } from 'react-router-dom'
import Login from './components/login/login'
import Home from './components/home/home'
import "antd/dist/antd.css"
import { checkLogin } from './common/common'

class App extends Component {
    constructor(props){
        super(props)
        checkLogin()
    }
    render() {
        return (
            <div>
                <Route path='/Login' component={Login}></Route>

                <Route exact path='/' component={Home}></Route>
            </div>
        )
    }
}
export default App
