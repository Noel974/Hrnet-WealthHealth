import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import TablePagination from '@mui/material/TablePagination';

export default function SearchAndPagination({
  search, handleChangeSearch, filteredRows, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage
}) {
  return (
    <Grid container spacing={2} alignItems="center" sx={{ marginTop:5 }}>
      <Grid item xs={12} md={6}>
        <TextField
          id="searchInput"
          label="Search"
          variant="outlined"
          value={search}
          onChange={handleChangeSearch}
          fullWidth
          sx={{ width: '50%' }}
          aria-label="Search"
        />
      </Grid>
      <Grid item xs={12} md={6} container justifyContent="flex-end">
        <TablePagination
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows per page:"
          rowsPerPageOptions={[10, 25, 100]}
          aria-label="Pagination"
        />
      </Grid>
    </Grid>
  );
}
