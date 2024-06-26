import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function TableHeadOutils() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Start Date</TableCell>
        <TableCell>Department</TableCell>
        <TableCell>Date of Birth</TableCell>
        <TableCell>Street</TableCell>
        <TableCell>City</TableCell>
        <TableCell>State</TableCell>
        <TableCell>Zip Code</TableCell>
      </TableRow>
    </TableHead>
  );
}
