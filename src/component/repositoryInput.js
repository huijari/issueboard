import { h, Component } from 'preact'
import linkstate from 'linkstate'

import Input from './input'

class RepositoryInput extends Component {
  onBlur() {
    this.bubble(this.state.text)
  }
  onKeyUp(event) {
    if (event.code === 'Enter') this.bubble(this.state.text)
  }

  bubble(text) {
    if (text === '') return

    const parts = text.split('/')
    if (parts.length != 2)
      return void this.props.onChange({ error: 'invalid format' })

    const [owner, name] = parts
    if (owner === '') return void this.props.onChange({ error: 'empty owner' })
    if (name === '') return void this.props.onChange({ error: 'empty name' })

    this.props.onChange({ owner, name })
  }

  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.onBlur = this.onBlur.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
  }

  render() {
    return (
      <Input
        label="Repository"
        description="In the format owner/name"
        onInput={linkstate(this, 'text')}
        onBlur={this.onBlur}
        onKeyUp={this.onKeyUp}
      />
    )
  }
}

export default RepositoryInput
