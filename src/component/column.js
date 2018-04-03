import { h } from 'preact'
import styled from 'styled-components'

import Issue from './issue'

const Header = styled.h1`
	margin: 8px 12px;
`

const Layout = styled.section`
	margin: 0 12px;
	max-width: 320px;
`

const Column = ({ name, issues }) => (
  <Layout>
		<Header>{name}</Header>
    {issues.map(({ number, title, labels }) => (
      <Issue number={number} title={title} labels={labels} />
    ))}
  </Layout>
)

export default Column
