import { h, Component } from 'preact'

import Board from './board'

import { getColumns } from '../service/issues'

import RepositoryInput from './repositoryInput'
import RepositoryLocation from './repositoryLocation'

class App extends Component {
  async loadIssues({ error, owner, name }) {
    if (error) return void this.setState({ error, columns: null })
    if (this.state.loading) return
    if (this.state.repo.owner == owner && this.state.repo.name == name) return

    this.setState({
      loading: true,
      repo: { owner, name }
    })
    try {
      const columns = await getColumns(owner, name)
      location.hash = `/${owner}/${name}`
      this.setState({ columns, loading: false })
    } catch (e) {
      const error = 'fetch error'
      this.setState({ error, loading: false })
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      repo: {},
      columns: null
    }

    this.loadIssues = this.loadIssues.bind(this)
  }

  render({}, { loading, error, columns }) {
    if (columns) return <Board columns={columns} />

    return (
      <div>
        <h1>Issue Board</h1>
        <RepositoryInput onChange={this.loadIssues} disabled={loading} />
        <RepositoryLocation onChange={this.loadIssues} />
        <p>{error}</p>
      </div>
    )
  }
}

export default App
