import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';

export default function TableHeadOutils({ order, orderBy, onRequestSort }) {
  const columns = [
    'firstName', 'lastName', 'startDate', 'department',
    'dateOfBirth', 'city', 'street', 'state', 'zipCode'
  ];

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((col) => (
          <TableCell key={col}>
            <TableSortLabel
              active={orderBy === col}
              direction={orderBy === col ? order : 'asc'}
              onClick={createSortHandler(col)}
            >
              {col.charAt(0).toUpperCase() + col.slice(1).replace(/([A-Z])/g, ' $1')}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
