import React, { Component, Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Home from './components/home/home'
import UseState from './components/Hooks/useState'
import UseEffect from './components/Hooks/useEffect'
import CaptureValue from './components/Hooks/CaptureValue'
import UseMemo from './components/Hooks/useMemo'
import UseCallback from './components/Hooks/useCallback'
import UseRef from './components/Hooks/useRef'
import "antd/dist/antd.css"
import ClassComponent from './demo/class'
import Hoc from './demo/hoc'
import RenderProps from './demo/render-props'
import Functional from './demo/functional'

const Home1 = withRouter(props => (
  <Home {...props}>
    <Route path='/ClassComponent' component={ClassComponent}></Route>
    <Route path='/Functional' component={Functional}></Route>
    <Route path='/Hoc' component={Hoc}></Route>
    <Route path='/RenderProps' component={RenderProps}></Route>

    <Route path='/UseState' component={UseState}></Route>
    <Route path='/UseEffect' component={UseEffect}></Route>
    <Route path='/CaptureValue' component={CaptureValue}></Route>
    <Route path='/UseMemo' component={UseMemo}></Route>
    <Route path='/UseCallback' component={UseCallback}></Route>
    <Route path='/UseRef' component={UseRef}></Route>

  </Home>
))

class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Fragment>
              <Home1 {...this.props} />
            </Fragment>
        )
    }
}
export default App
