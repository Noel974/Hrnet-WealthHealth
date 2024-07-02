// EmployeeTable.js
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadEmployees } from '../../Redux/Action/Load';
import { Container, Typography, Table, TableContainer, Paper, Box } from '@mui/material';
import TableBodyOutils from '../../Outils/Tableau/TableBodyOutils';
import SearchAndPagination from '../../Outils/Tableau/SearchPagiOutils';
import TableHeadOutil from '../../Outils/Tableau/TableHeadOutils';

export default function EmployeeTable() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  // State management
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');

  useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch]);

  // Formatting employee data
  const rows = employees?.map(emp => ({
    firstName: emp.firstName,
    lastName: emp.lastName,
    startDate: emp.startDate,
    department: emp.department,
    dateOfBirth: emp.dateOfBirth,
    street: emp.street,
    city: emp.city,
    state: emp.state,
    zipCode: emp.zipCode,
  })) || [];

  // Handlers for search, pagination, sorting
  const handleChangeSearch = (event) => setSearch(event.target.value);
  const handleChangePage = (newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Filtering and sorting rows
  const filteredRows = rows.filter(row =>
    row.firstName.toLowerCase().includes(search.toLowerCase()) ||
    row.lastName.toLowerCase().includes(search.toLowerCase())
  );
  const sortedRows = filteredRows.sort((a, b) => {
    if (['firstName', 'lastName', 'department', 'city', 'state'].includes(orderBy)) {
      return order === 'asc' ? a[orderBy].localeCompare(b[orderBy]) : b[orderBy].localeCompare(a[orderBy]);
    } else {
      return order === 'asc' ? new Date(a[orderBy]) - new Date(b[orderBy]) : new Date(b[orderBy]) - new Date(a[orderBy]);
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
              <TableHeadOutil
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
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
