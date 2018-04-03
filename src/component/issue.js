import { h } from 'preact'
import styled from 'styled-components'

import Label from './label'

const Layout = styled.div`
  background: white;
  border-radius: 2px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
  margin: 12px 0;

  section {
    align-items: center;
    display: flex;
    color: #444;
    font-size: 0.9em;
    justify-content: space-between;
    margin-bottom: 8px;
  }
`

const Issue = ({ title, number, labels }) => (
  <Layout>
    <section>
      <span>#{number}</span>
      <div>
        {labels.map(({ name, color }) => <Label name={name} color={color} />)}
      </div>
    </section>
    <span>{title}</span>
  </Layout>
)

export default Issue
