import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import TablePagination from '@mui/material/TablePagination';

export default function SearchAndPagination({
  search, handleChangeSearch, filteredRows, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage
}) {
  return (
    <Grid container margin={"10px"} justifyContent="space-between" alignItems="center">
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={search}
          onChange={handleChangeSearch}
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
  );
}
