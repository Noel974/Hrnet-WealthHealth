import React from 'react';
import { Button, Box } from '@mui/material';

function FormSave({ saveEmployee }) {
  return (
    <Box sx={{ mt: 2, textAlign: 'center' }}>
      <Button
        variant="contained"
        color="primary"
        onClick={saveEmployee}
        aria-label="Save employee" 
      >
        Save
      </Button>
    </Box>
  );
}

export default FormSave;
