import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function Footer() {
  return (
    <Grid >
      <Box sx={{ bgcolor: '#1a1a1a', color: 'white', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Employee Management System<br /> 
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
        </Typography>
        <Typography sx={{ textAlign: 'center' }}>Copyright Ⓒ Emoloyee Management System 2022</Typography>
        <Box sx={{display:'flex', justifyContent:'center'}}>

        </Box>
      </Box>
    </Grid>
  );
}
