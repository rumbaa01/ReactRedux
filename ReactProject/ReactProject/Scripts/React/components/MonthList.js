
import React from 'react';
const MonthList = React.createClass({
  render() {
    return (
<table className="table table-hover"> 
<thead>
 <tr> <th>#</th> <th>Month Name</th> <th>Year</th> <th>Pay(UAH)</th> </tr> 
 </thead> 
 <tbody> 
  {this.props.months.map((item, i) =>  <tr key={item.Id}> 
  											<th scope="row">{i + 1}</th> 
  												<td>{item.MonthName}</td> 
  												<td>{item.Year}</td> 
  												<td>{item.Pay}</td> 
  												<td><button className='btn' onClick={() => this.props.deleteMonth(item.Id)}>Delete</button>
  													<button className='btn' onClick={() => this.props.openModal('EDIT_MONTH', true)}>Edit</button>
												</td> 
										</tr>)}
    </tbody>
     </table>
    )
  }
});

export default MonthList;