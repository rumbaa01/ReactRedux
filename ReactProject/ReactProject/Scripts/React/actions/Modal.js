export const openModal = (modalType, modalShow) => ({
	type: 'SHOW_MODAL',
	modalType,
	modalShow
})
export const hideModal = () => ({
	type: 'HIDE_MODAL'
})