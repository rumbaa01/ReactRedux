import React, {Component} from 'react'
const LoaderHOC = (Props) => (WrappedComponent) => {
	return class LoaderHOC extends Component {
		render(){
			return this.props[Props].length === 0 ? <div className='loader'></div> : <WrappedComponent {...this.props} />
		}
	}
}
export default LoaderHOC