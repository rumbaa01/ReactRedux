import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import middleware from '../middlewares/promises-middleware'
import createLogger from 'redux-logger'

const logger = createLogger()
const store = createStore(rootReducer,
						  applyMiddleware(middleware),
						  applyMiddleware(logger))
export const history = syncHistoryWithStore(browserHistory, store)
export default store
