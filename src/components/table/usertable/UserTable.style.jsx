
import styled from "styled-components";




// Styled components

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse; /* Collapse borders to merge them */
`;

export const TableHeader = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
`;

export const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd; /* Only add bottom border */
  /* Remove vertical border */
  border-right: none; 
  border-left: none; 
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f1f1f1;
  }
`;