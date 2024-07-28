import Grid from '@mui/material/Grid';
import TablePagination from '@mui/material/TablePagination';
import TextField from '@mui/material/TextField';
import React from 'react';

/**
 * Composant SearchAndPagination qui gère la recherche et la pagination des données dans une table.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.search - La valeur actuelle de la barre de recherche.
 * @param {function} props.handleChangeSearch - Fonction de rappel pour gérer le changement de texte dans la barre de recherche.
 * @param {Array} props.filteredRows - Tableau contenant les lignes filtrées après recherche.
 * @param {number} props.rowsPerPage - Le nombre de lignes à afficher par page.
 * @param {number} props.page - Le numéro de la page actuelle dans la pagination.
 * @param {function} props.handleChangePage - Fonction de rappel pour changer la page actuelle.
 * @param {function} props.handleChangeRowsPerPage - Fonction de rappel pour changer le nombre de lignes affichées par page.
 * @returns {JSX.Element} Le composant SearchAndPagination.
 */
export default function SearchAndPagination({
  search,
  handleChangeSearch,
  filteredRows,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage
}) {
  return (
    <Grid container spacing={2} alignItems="center" sx={{ marginTop: 5 }}>
      {/* Zone de recherche */}
      <Grid item xs={12} md={6}>
        <TextField
          id="searchInput"
          label="Search"
          variant="outlined"
          value={search}
          onChange={handleChangeSearch} // Gère la mise à jour de la valeur de recherche
          fullWidth
          sx={{ width: '50%' }} // Applique une largeur de 50% au champ de recherche
          aria-label="Search"
        />
      </Grid>

      {/* Pagination */}
      <Grid item xs={12} md={6} container justifyContent="flex-end">
        <TablePagination
          component="div"
          count={filteredRows.length} // Nombre total de lignes après filtrage
          rowsPerPage={rowsPerPage} // Nombre de lignes à afficher par page
          page={page} // Page actuelle
          onPageChange={handleChangePage} // Fonction pour gérer le changement de page
          onRowsPerPageChange={handleChangeRowsPerPage} // Fonction pour gérer le changement du nombre de lignes par page
          labelRowsPerPage="Rows per page:"
          rowsPerPageOptions={[10, 25, 100]} // Options pour le nombre de lignes par page
          aria-label="Pagination"
        />
      </Grid>
    </Grid>
  );
}
