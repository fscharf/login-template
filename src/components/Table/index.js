import styled from 'styled-components'

const Table = styled.table`
  border: 1px solid #cce5ff;
  padding: 0;
  border-collapse: collapse;
  width: 1024px;
  max-width: 100%;
`
Table.Row = styled.tr``
Table.Head = styled.thead``
Table.Body = styled.tbody``
Table.Heading = styled.th`
  background-color: #cce5ff;
  padding: 16px;
  font-weight: 700;
  color: #00639c;
`
Table.Content = styled.td`
  padding: 16px;
`

export default Table
