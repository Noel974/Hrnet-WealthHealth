import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadEmployees } from '../../Redux/Action/Load';
import { Container, Typography, Table, TableContainer, Paper } from '@mui/material';
import TableHeadOutils from '../../Outils/Tableau/TableHeadOutils';
import TableBodyOutils from '../../Outils/Tableau/TableBodyOutils';
import SearchAndPagination from '../../Outils/Tableau/SearchPagiOutils';

export default function EmployeeTable() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredRows = rows.filter(row =>
    row.firstName.toLowerCase().includes(search.toLowerCase()) ||
    row.lastName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className='main' role="main">
      <Container>
        <Typography component="h1" variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Current Employees</Typography>
        <Paper sx={{ width: '90%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table" role="table">
              <TableHeadOutils />
              <TableBodyOutils rows={filteredRows} page={page} rowsPerPage={rowsPerPage} />
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
          <NavLink className="lien" to="/" role="link">Add Employees</NavLink>
      </Container>
    </main>
  );
}
