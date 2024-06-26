import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function TableBodyOutils({ rows, page, rowsPerPage }) {
  return (
    <TableBody>
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.firstName + row.lastName}>
            <TableCell>{row.firstName}</TableCell>
            <TableCell>{row.lastName}</TableCell>
            <TableCell>{row.startDate}</TableCell>
            <TableCell>{row.department}</TableCell>
            <TableCell>{row.dateOfBirth}</TableCell>
            <TableCell>{row.street}</TableCell>
            <TableCell>{row.city}</TableCell>
            <TableCell>{row.state}</TableCell>
            <TableCell>{row.zipCode}</TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
}
