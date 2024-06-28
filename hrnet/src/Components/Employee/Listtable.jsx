import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadEmployees } from '../../Redux/Action/Load';
import { Container, Typography, Table, TableContainer, Paper, Box, TableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';
import TableBodyOutils from '../../Outils/Tableau/TableBodyOutils';
import SearchAndPagination from '../../Outils/Tableau/SearchPagiOutils';

export default function EmployeeTable() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('firstName');

  React.useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch]);

  const rows = employees ? employees.map(emp => ({
    firstName: emp.firstName,
    lastName: emp.lastName,
    startDate: emp.startDate,
    department: emp.department,
    dateOfBirth: emp.dateOfBirth,
    street: emp.street,
    city: emp.city,
    state: emp.state,
    zipCode: emp.zipCode,
  })) : [];

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filteredRows = rows.filter(row =>
    row.firstName.toLowerCase().includes(search.toLowerCase()) ||
    row.lastName.toLowerCase().includes(search.toLowerCase())
  );

  const sortedRows = filteredRows.sort((a, b) => {
    if (orderBy === 'firstName' || orderBy === 'lastName' || orderBy === 'department' || orderBy === 'city' || orderBy === 'state') {
      return order === 'asc'
        ? a[orderBy].localeCompare(b[orderBy])
        : b[orderBy].localeCompare(a[orderBy]);
    } else {
      return order === 'asc'
        ? new Date(a[orderBy]) - new Date(b[orderBy])
        : new Date(b[orderBy]) - new Date(a[orderBy]);
    }
  });

  return (
    <main className='main' role="main">
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Typography component="h1" sx={{ textAlign: 'center', fontSize: 45, mb: 2 }}>
          Current Employees
        </Typography>
        <Paper sx={{ width: '120%', overflow: 'hidden', border: '4px solid #5a7008' }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table" role="table">
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
                      active={orderBy === 'city'}
                      direction={orderBy === 'city' ? order : 'asc'}
                      onClick={(event) => handleRequestSort(event, 'city')}
                    >
                      City
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === 'Street'}
                      direction={orderBy === 'Street' ? order : 'asc'}
                      onClick={(event) => handleRequestSort(event, 'Street')}
                    >
                      Street
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
              <TableBodyOutils rows={sortedRows} page={page} rowsPerPage={rowsPerPage} />
            </Table>
          </TableContainer>
          <SearchAndPagination 
            search={search}
            handleChangeSearch={handleChangeSearch}
            filteredRows={filteredRows}
            rowsPerPage={rowsPerPage}
            page={page}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <Box sx={{ mt: 2 }}>
          <NavLink className="lien" to="/" role="link">
            Add Employees
          </NavLink>
        </Box>
      </Container>
    </main>
  );
}
