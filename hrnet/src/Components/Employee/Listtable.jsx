import React from 'react';
import {Paper,Table,TableBody,TableCell,TableContainer,TableHead, TablePagination, TableRow,TextField,Grid, TableSortLabel} from '@mui/material/';

import { NavLink } from 'react-router-dom';
import { loadEmployees } from '../../Redux/Action/Recup';
import { useDispatch, useSelector } from 'react-redux';

function createData(firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode) {
  return { firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function EmployeeTable() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  const [search, setSearch] = React.useState('');
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('firstName');

  React.useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch]);

  const rows = employees.map(emp => createData(emp.firstName, emp.lastName, emp.startDate, emp.department, emp.dateOfBirth, emp.street, emp.city, emp.state, emp.zipCode));

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Filtrer les lignes en fonction de la valeur de recherche
  const filteredRows = rows.filter(row => row.firstName.toLowerCase().includes(search.toLowerCase()) || row.lastName.toLowerCase().includes(search.toLowerCase()));

  const sortedRows = stableSort(filteredRows, getComparator(order, orderBy));

  return (
    <main className='main'>
      <h2>Current Employee</h2>
        
      <Paper sx={{ width: '90%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'firstName'}
                    direction={orderBy === 'firstName' ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, 'firstName')}
                  >
                    First Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'lastName'}
                    direction={orderBy === 'lastName' ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, 'lastName')}
                  >
                    Last Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'startDate'}
                    direction={orderBy === 'startDate' ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, 'startDate')}
                  >
                    Start Date
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'department'}
                    direction={orderBy === 'department' ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, 'department')}
                  >
                    Department
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'dateOfBirth'}
                    direction={orderBy === 'dateOfBirth' ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, 'dateOfBirth')}
                  >
                    Date of Birth
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'street'}
                    direction={orderBy === 'street' ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, 'street')}
                  >
                    Street
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'city'}
                    direction={orderBy === 'city' ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, 'city')}
                  >
                    City
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'state'}
                    direction={orderBy === 'state' ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, 'state')}
                  >
                    State
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'zipCode'}
                    direction={orderBy === 'zipCode' ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, 'zipCode')}
                  >
                    Zip Code
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedRows
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
      <NavLink className="lien" to="/">Ajout Employees</NavLink>
    </main>
  );
}
