import { Box, Container, Paper, Table, TableContainer, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchAndPagination from '../../Outils/Tableau/SearchPagiOutils';
import TableBodyOutils from '../../Outils/Tableau/TableBodyOutils';
import TableHeadOutil from '../../Outils/Tableau/TableHeadOutils';
import { loadEmployees } from '../../Redux/Action/Load';

export default function EmployeeTable() {
  // Initialisation du dispatch pour envoyer des actions Redux
  const dispatch = useDispatch();
  
  // Sélecteur Redux pour récupérer la liste des employés depuis l'état global
  const employees = useSelector((state) => state.employees);

  // Gestion des états locaux
  const [search, setSearch] = useState(''); // État pour la recherche
  const [page, setPage] = useState(0); // État pour la pagination
  const [rowsPerPage, setRowsPerPage] = useState(10); // État pour le nombre de lignes par page
  const [order, setOrder] = useState('asc'); // État pour l'ordre de tri (ascendant/descendant)
  const [orderBy, setOrderBy] = useState('firstName'); // État pour la colonne de tri

  // Chargement des employés à partir de l'API lors du montage du composant
  useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch]);

  // Formatage des données des employés
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

  // Gestion des événements de recherche, pagination, tri
  const handleChangeSearch = (event) => setSearch(event.target.value);

  const handleChangePage = (newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0); // Réinitialiser la page à 0 lors du changement de nombre de lignes par page
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc'); // Alterner entre ascendant et descendant
    setOrderBy(property); // Mettre à jour la colonne de tri
  };

  // Filtrage et tri des lignes en fonction de la recherche et des critères de tri
  const filteredRows = rows.filter(row =>
    row.firstName.toLowerCase().includes(search.toLowerCase()) ||
    row.lastName.toLowerCase().includes(search.toLowerCase())
  );

  const sortedRows = filteredRows.sort((a, b) => {
    if (['firstName', 'lastName', 'department', 'city', 'state'].includes(orderBy)) {
      // Tri alphabétique
      return order === 'asc' ? a[orderBy].localeCompare(b[orderBy]) : b[orderBy].localeCompare(a[orderBy]);
    } else {
      // Tri par date
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
              {/* En-tête du tableau */}
              <TableHeadOutil
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              {/* Corps du tableau */}
              <TableBodyOutils rows={sortedRows} page={page} rowsPerPage={rowsPerPage} />
            </Table>
          </TableContainer>
          {/* Composant pour la recherche et la pagination */}
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
          {/* Lien de navigation pour ajouter des employés */}
          <NavLink className="lien" to="/create" role="link">
            Add Employees
          </NavLink>
        </Box>
      </Container>
    </main>
  );
}
