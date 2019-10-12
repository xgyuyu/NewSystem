import React, { Component, Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Login from './components/login/login'
import Home from './components/home/home'
import User from './components/user/user'
import Main from './components/main/main'
import "antd/dist/antd.css"
import { checkLogin } from './common/common'

const Hello = () => (
  <p>欢迎你</p>
)

const Home1 = withRouter(props => (
  <Home {...props}>
    {/*<Route path='/' component={Hello}></Route>*/}
    <Route path='/user' component={User}></Route>
    <Route path='/main' component={Main}></Route>
  </Home>
))

class App extends Component {
    constructor(props){
        super(props)
        checkLogin()
    }

    render() {
        return (
            <Fragment>
              <Route path='/Login' component={Login}></Route>
              <Home1 {...this.props} />
            </Fragment>
        )
    }
}
export default App
