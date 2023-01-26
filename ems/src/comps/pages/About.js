import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import mission from '../images/mission.png';
import vision from '../images/vision.png';
import magnifying from '../images/magnifying.jpg';
import corevalues from '../images/corevalues.png';

export default function About() {
    return (
        <Box sx={{ m: '3rem', flexGrow: '1' }}>
            <Grid container spacing={3} flexGrow='1'>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '5rem', pt: '55px' }}>Application Summary</Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ color: 'white' }}>
                    <Box sx={{ backgroundColor: '#ffc054', p: '10px' }}>
                        <Box component='img' src={mission} sx={{ height: '100px', float: 'right' }} />
                        <Typography sx={{ fontSize: '3rem', fontWeight: 'bold' }}>Mission Statement</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: '#ffc054', p: '10px' }}>
                        <Typography sx={{ fontSize: '1.2rem' }}>Mission about this project is to fulfill the company's needs to watch over all of it's employees, and have a management system that allows it's authorized personnel to make decisions about managing currently employed.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ color: 'white' }}>
                    <Box sx={{ backgroundColor: '#12a184', p: '10px' }}>
                        <Box component='img' src={vision} sx={{ height: '100px', float: 'right' }} />
                        <Typography sx={{ fontSize: '3rem', fontWeight: 'bold' }}>Vision Statement</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: '#12a184', p: '10px' }}>
                        <Typography sx={{ fontSize: '1.2rem' }}>The future of this project is to implement and cover all of the possibilities that will make this application more immersive and more flexible. The application allows the employers to fully manage their employees for business purposes.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ backgroundColor: 'lightblue', p: '10px' }}>
                        <Box component='img' src={magnifying} sx={{ height: '100px', float: 'right' }} />
                        <Typography sx={{ fontSize: '3rem', fontWeight: 'bold' }}>Target Market Summary</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: 'lightblue', p: '10px' }}>
                        <Typography sx={{ fontSize: '1.2rem' }}>This application allows everyone who needs the data management system which can adequately manage employees of certain business to implement this application for quick and scalable resolution.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                    <Typography sx={{ fontSize: '3rem', fontWeight: 'bold', textAlign:'center'}}>Core Values</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box component='img' src={corevalues} sx={{ height: '170px', justifyContent: 'center' }} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
