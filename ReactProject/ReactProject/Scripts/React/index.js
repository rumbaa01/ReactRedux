import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store, {history} from './store/configureStore'
import {Router, Route, IndexRoute} from 'react-router'

import App from './containers/App'
import ExpensesList from './components/ExpensesList'
import MonthList from './components/MonthList'
// import LoaderHOC from './components/LoaderHOC'


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MonthList}></IndexRoute>
    	<Route path="/month/:monthId"  component={ExpensesList} ></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
