import { h } from 'preact'
import styled from 'styled-components'

import Column from './column'

const Layout = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 12px;
`

const Board = ({ columns }) => (
	<Layout>
		{columns.map(({ name, issues }) => <Column name={name} issues={issues} />)}
	</Layout>
)

export default Board
