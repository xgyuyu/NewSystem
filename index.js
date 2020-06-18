import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'
import Router from './src/router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
ReactDOM.render(
  <Router history={history}>
    <App></App>
  </Router>, document.getElementById('app')
)
if (module.hot) {
  module.hot.accept()
}
