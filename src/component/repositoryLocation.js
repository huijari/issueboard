import { h, Component } from 'preact'

import { parseName } from '../service/repository'

class RepositoryLocation extends Component {
	onHashChange() {
		const text = location.hash.substr(2)
		if (text === '') return
		this.props.onChange(parseName(text))	
	}

	constructor(props) {
		super(props)
		this.onHashChange = this.onHashChange.bind(this)
	}

	componentDidMount() {
		window.addEventListener('hashchange', this.onHashChange)
	}
	componentWillUmount() {
		window.removeEventListener('hashchange', this.onHashChange)
	}
}

export default RepositoryLocation
