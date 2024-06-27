import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function TableHeadOutils() {
  return (
    <TableHead>
      <TableRow>
        <TableCell id="firstNameHeader" scope="col">First Name</TableCell>
        <TableCell id="lastNameHeader" scope="col">Last Name</TableCell>
        <TableCell id="startDateHeader" scope="col">Start Date</TableCell>
        <TableCell id="departmentHeader" scope="col">Department</TableCell>
        <TableCell id="dateOfBirthHeader" scope="col">Date of Birth</TableCell>
        <TableCell id="streetHeader" scope="col">Street</TableCell>
        <TableCell id="cityHeader" scope="col">City</TableCell>
        <TableCell id="stateHeader" scope="col">State</TableCell>
        <TableCell id="zipCodeHeader" scope="col">Zip Code</TableCell>
      </TableRow>
    </TableHead>
  );
}
