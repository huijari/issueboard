import { h, Component } from 'preact'

import Board from './board'

import { getColumns } from '../service/issues'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    getColumns('ponylang', 'ponyc').then(columns =>
      this.setState({ columns, loading: false })
    )
  }

  render({}, { loading, columns }) {
    return loading ? 'loading...' : <Board columns={columns} />
  }
}

export default App
