import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import Month from './Month'
import Expense from './Expense'
import Modal from './Modal'

export default combineReducers({
  Month,
  Expense,
  Modal,
  routing: routerReducer
})
