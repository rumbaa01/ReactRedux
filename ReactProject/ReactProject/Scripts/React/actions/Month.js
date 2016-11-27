import { getMonthsAsync, 
         addMonthAsync, 
         deleteMonthAsync } from '../api/monthApi';

export const getMonths = function() {
  return {
    type: 'PROMISE',
    actions: ['MONTHS_LOADING', 'MONTHS_LOADED', 'MONTHS_LOAD_FAILURE'],
    promise: getMonthsAsync
  };
};

export const addMonth = function(monthName, year, pay) {

  return {
    type: 'PROMISE',
    actions: ['MONTH_LOADING', 'MONTH_LOADED', 'MONTH_LOAD_FAILURE'],
    promise: addMonthAsync,
    queryParams: {
      MonthName: monthName,
      Year: year, 
      Pay: pay
    }
  };
};


export const deleteMonth = function(monthId) {
  return {
    type: 'PROMISE',
    actions: ['MONTH_REMOVING', 'MONTH_REMOVED', 'MONTH_REMOVE_FAILURE'],
    promise: deleteMonthAsync,
    queryParams: {
      monthId
    }
  };
};