
const Month = (state = {isFetching: false, months: []}, action) => {
	switch (action.type){
		case 'MONTHS_LOADING':
			return{
				...state,
				isFetching: true
			}
		case 'MONTHS_LOADED':
			return{
				...state,
				isFetching: false,
				months: action.data
			}
		case 'MONTH_LOADED':
			return{
			...state,
			months: [...state.months, action.data]
			}
		case 'MONTH_REMOVED':
		console.log(action, "REMOVEEEEEEEE");
			let index = state.months.findIndex((item) => item.Id == action.data.monthId)
			return{
			...state,
			months: [...state.months.slice(0, index),
        			 ...state.months.slice(index + 1)]
			}
		default:
			return state
	}
}

export default Month
