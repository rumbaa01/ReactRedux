import React, { Component } from 'react'
export default class AddMonth extends Component {
  render() {
    let inputMonth
    let inputYear
    let inputPay
    return(
      <div className='addMonthPopup'>
      <form  onSubmit={e => {e.preventDefault(); 
        if (!inputMonth.value.trim() && !inputYear.value.trim() && !inputPay.value.trim()) { return}
         this.props.addMonth(inputMonth.value, inputYear.value, inputPay.value);
          inputMonth.value = ''; 
          inputYear.value='';
          inputPay.value='';
          this.props.hideModal();
           }}>
      <label>Month:</label>  <input ref={node => { inputMonth = node }} />
      <label>Year:</label>  <input type='number' ref={node => { inputYear = node }} />
      <label>Pay:</label>  <input type='number' ref={node => { inputPay = node }} />
        <button type='submit' className='btn btn-default'>
          Add Month
        </button>
        <span onClick={() => this.props.hideModal('EDIT_MONTH', false)} className='btn btn-default'>
          Close
        </span>
      </form>
    </div>
  )
  }
}
