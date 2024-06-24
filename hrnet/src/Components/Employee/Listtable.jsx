import  React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { NavLink } from 'react-router-dom';
import { loadEmployees } from '../../Redux/Action/load';
import { useDispatch, useSelector } from 'react-redux';

function createData(
  firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode
) {
  return { firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode };
}

export default function EmployeeTable() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch]);

  const rows = employees.map(emp => createData(emp.firstName, emp.lastName, emp.startDate, emp.department, emp.dateOfBirth, emp.street, emp.city, emp.state, emp.zipCode));

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Filtrer les lignes en fonction de la valeur de recherche
  const filteredRows = rows.filter(row => row.firstName.toLowerCase().includes(search.toLowerCase()) || row.lastName.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className='main'>
         <h2>Current Employee</h2>
        
    <Paper sx={{ width: '90%', overflow: 'hidden' }}>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
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
          <TableBody>
            {filteredRows
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
        </Table>
      </TableContainer>

      <Grid container margin={"10px"} justifyContent="space-between" alignItems="center">
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={search}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </Grid>
    </Paper>
    <NavLink  className="lien" to="/">Ajout Employees</NavLink>
    </main>

  );
}