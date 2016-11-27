import React from 'react';
import { Link } from 'react-router';
import AddMonth from '../containers/AddMonth'
import EditMonth from '../containers/EditMonth'

const MODAL_COMPONENTS = {
  'ADD_MONTH': AddMonth,
  'EDIT_MONTH': EditMonth
}

const Main = React.createClass({
  componentDidMount() {
    this.props.getMonths()
  },
  render() {
    const {isFetching, months, modal} = this.props
    const isEmpty = months.length === 0
    const SpecificModal = MODAL_COMPONENTS[modal.modalType]
    return (
      <div class='container-app'>
        <h1>
          <Link to="/">Application Expenses</Link>
        </h1>
        {this.props.modal.modalShow ? <SpecificModal {...this.props} /> : null} 
        {isEmpty 
          ? (isFetching ? <div className='loader'></div> : <div>Empty</div>)
          : React.cloneElement(this.props.children, {...this.props})}
          <button onClick={() => this.props.openModal('ADD_MONTH', true)}>Add Month</button>
      </div>
    )
  }
});

export default Main;