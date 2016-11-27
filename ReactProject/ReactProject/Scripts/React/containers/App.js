import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Main from '../containers/Main'
import { getMonths, addMonth, deleteMonth } from '../actions/Month'
import  {openModal, hideModal} from '../actions/Modal'
function mapStateToProps (state) {
  return {
    isFetching: state.Month.isFetching,
    months: state.Month.months,
    modal: state.Modal
  }
}
function mapDispachToProps(dispatch) {
  return {
  	getMonths: bindActionCreators(getMonths, dispatch),
  	addMonth: bindActionCreators(addMonth, dispatch),
  	deleteMonth: bindActionCreators(deleteMonth, dispatch),
  	openModal: bindActionCreators(openModal, dispatch),
  	hideModal: bindActionCreators(hideModal, dispatch)
  }
}
const App =  connect(mapStateToProps, mapDispachToProps)(Main)
export default App
