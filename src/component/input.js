import { h } from 'preact'
import styled from 'styled-components'

const Input = styled.input`
  background: ${({ disabled }) => (disabled ? '#eee' : 'white')};
  border: 1px solid #0001;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: block;
  margin-bottom: 4px;
  padding: 8px;
`

const Label = styled.label`
  span {
    display: block;
    font-weight: bold;
    margin-bottom: 4px;
    margin-left: 8px;
  }
  small {
    color: #0009;
    margin-left: 8px;
  }
`

const LabeledInput = props => (
  <Label>
    <span>{props.label}</span>
    <Input {...props} />
    {props.description ? <small>{props.description}</small> : null}
  </Label>
)

export default LabeledInput
