import { h, Component } from 'preact'
import linkstate from 'linkstate'

import Input from './input'
import { parseName } from '../service/repository'

class RepositoryInput extends Component {
  onBlur() {
    this.bubble(this.state.text)
  }
  onKeyUp(event) {
    if (event.code === 'Enter') this.bubble(this.state.text)
  }

  bubble(text) {
    if (text === '') return
    this.props.onChange(parseName(text))
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
