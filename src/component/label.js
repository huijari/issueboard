import { h } from 'preact'
import styled from 'styled-components'

const Label = styled.span`
	background: ${({ color }) => color};
	border-radius: 100%;
	display: inline-block;
	height: 12px;
	margin: 0 4px;
	width: 12px;
`

const NamedLabel = ({ name, color }) => <Label title={name} color={color} />

export default NamedLabel
