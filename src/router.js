import React from 'react'
import App from './App'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home/home'
import UseState from './components/Hooks/useState'
import UseEffect from './components/Hooks/useEffect'
import ClassComponent from './demo/class'
import Hoc from './demo/hoc'
import RenderProps from './demo/render-props'
import Functional from './demo/functional'
import CaptureValue from './components/Hooks/CaptureValue'
import UseMemo from "./components/Hooks/useMemo"
import UseCallback from "./components/Hooks/useCallback"
import UseRef from "./components/Hooks/useRef"

export default class ERouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>

                        <Route path="/UseState" component={UseState} />
                        <Route path="/UseEffect" component={UseEffect} />
                        <Route path="/CaptureValue" component={CaptureValue} />
                        <Route path="/" component={Home} />
                        <Route path="/ClassComponent" component={ClassComponent} />
                        <Route path="/Hoc" component={Hoc} />
                        <Route path="/RenderProps" component={RenderProps} />
                        <Route path="/Functional" component={Functional} />
                        <Route path="/UseMemo" component={UseMemo} />
                        <Route path="/UseCallback" component={UseCallback} />
                        <Route path="/UseRef" component={UseRef} />

                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
