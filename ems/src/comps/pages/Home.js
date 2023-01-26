import React from 'react'
import { useState } from "react";
import Axios from 'axios';
import { Grid, TextField, Paper, Button, Typography, Box, styled } from '@mui/material';
import allemp from '../images/allemployees.png';
import keeptrack from '../images/keeptrack.png';

const Home = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [position, setPosition] = useState('');
    const [wage, setWage] = useState(0);
    const [date_hired, setDateHired] = useState('');

    const addEmployee = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/create',
            {
                name: name,
                age: age,
                country: country,
                position: position,
                wage: wage,
                date_hired: date_hired,
            }).then(() => {
                console.log('New user has been added.');
            })
    }

    const styles = {
        paperContainer: {
            backgroundImage: `url(${'https://wallpapercave.com/wp/wp7728152.jpg'})`,
            height: '1000px',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center'
        },
        paperContainer1: {
            backgroundImage: `url(${'https://www.thehumancapitalhub.com/images/uploads_articles/66913-What%20is%20an%20employee%20background%20check.webp'})`,
            height: '450px',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center'
        }
    }

    return (
        <Grid>
            <Paper style={styles.paperContainer}>
                <Grid container sx={{ pt: '100px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ color: '#1a1a1a', pl: '15%', pt: '10%', fontSize: '6.6rem', fontWeight: 'bold' }}>Employee Management System</Typography>
                        <Typography sx={{ fontSize: '2rem', pl: '15%', fontWeight: 'bold' }}>Where you can keep track of your employees at all times.</Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper style={styles.paperContainer1}>
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '100px', mb: '100px', color: 'white' }}>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box component="img" src={keeptrack} sx={{ height: '250px' }} />
                    </Grid>
                    <Grid item xs={6} >
                        <Typography sx={{ fontSize: '3rem' }}>What can you do<br />with this application?</Typography>
                        <Typography sx={{ fontSize: '1.5rem', mb: '1rem' }}>With this application you can access directly the database that contains your employees,<br />You can do it now by clicking the button below.</Typography>
                        <Button href="/employees" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem', border: '2px solid black', borderRadius: '20px' }}>Go To all employees</Button>
                    </Grid>
                </Grid>
            </Paper>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '50vh' }}
            >
                <Typography sx={{ display: 'flex', justifyContent: 'center', pt: '10px', pb: '20px', fontSize: '3rem' }}>Enter new <br />Employee:</Typography>
                <Grid item xs={4} sx={{ padding: '5px', display: 'block', justifyContent: 'center' }}>
                    <TextField sx={{ m: '5px' }} label='Name' onChange={e => setName(e.target.value)}></TextField>
                    <TextField sx={{ m: '5px' }} label='Age' onChange={e => setAge(e.target.value)}></TextField>
                    <TextField sx={{ m: '5px' }} label='Country' onChange={e => setCountry(e.target.value)}></TextField>
                    <TextField sx={{ m: '5px' }} label='Position' onChange={e => setPosition(e.target.value)}></TextField>
                    <TextField sx={{ m: '5px' }} label='Wage' onChange={e => setWage(e.target.value)}></TextField>
                    <TextField sx={{ m: '5px' }} label='Date Hired' onChange={e => setDateHired(e.target.value)}></TextField><br />
                    <Button sx={{ p: '1rem', border: '1px solid black', color: 'black', m: '4px', mb: '1rem' }} onClick={addEmployee}>Add Employee</Button>
                </Grid>
                <Grid item>
                    <Box component='img' src={allemp} sx={{ height: '400px' }}>

                    </Box>
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            </Grid>
        </Grid >
    );
}

export default Home
