const initialState = {
  modalType: null,
  modalShow: false
}

const Modal = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        modalType: action.modalType,
        modalShow: action.modalShow
      }
    case 'HIDE_MODAL':
      return {
        modalType: action.modalType,
        modalShow: action.modalShow
      }
    default:
      return state
  }
}
export default Modal