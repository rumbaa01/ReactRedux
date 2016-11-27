import React, { Component } from 'react'
import '../css/main.css'
export default class AddExpense extends Component {
  render() {
    let inputName
    let inputPrice
    return(
      <form className='addExpense' onSubmit={e => {e.preventDefault(); if (!inputName.value.trim() && !inputPrice.value.trim()) { return} this.props.addExpense(inputName.value, inputPrice.value); inputName.value = ''; inputPrice.value=''}}>
      <label>Name:</label>  <input ref={node => { inputName = node }} />
      <label>Price:</label>  <input type='number' ref={node => { inputPrice = node }} />
        <button type='submit'>
          Add Expense
        </button>
      </form>
  )
  }
}
