import { h } from 'preact'
import styled from 'styled-components'

import Issue from './issue'

const Header = styled.h1`
	margin: 8px;
`

const Column = ({ name, issues }) => (
  <section>
		<Header>{name}</Header>
    {issues.map(({ number, title, labels }) => (
      <Issue number={number} title={title} labels={labels} />
    ))}
  </section>
)

export default Column
