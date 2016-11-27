import {
	getAsync, 
	postAsync,
	deleteAsync	
} from './requestFetch';

let baseMonthsUrl = 'month/';

export function getMonthsAsync() {
	let url = baseMonthsUrl;

	return getAsync(url);
}

export function addMonthAsync(data) {
	let  month  = data; 
	let url = baseMonthsUrl;

	return postAsync(url, month);
}

export function deleteMonthAsync(data) {
	let { monthId } = data; 
	let url = baseMonthsUrl + monthId + '/';

	return deleteAsync(url);
}