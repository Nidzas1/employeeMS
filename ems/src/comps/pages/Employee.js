import React, { useEffect, useState } from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, Input, Button, Box } from '@mui/material';
import Axios, * as others from 'axios';
import eimage from '../images/employee.jpg';

const Employees = () => {

    const [employees, setEmployees] = useState(['']);
    const [newName, setNewName] = useState();
    const [newAge, setNewAge] = useState();
    const [newCountry, setNewCountry] = useState();
    const [newPosition, setNewPosition] = useState();
    const [newWage, setNewWage] = useState();
    const [newDateHired, setNewDateHired] = useState();

    useEffect(() => {
        Axios.get('http://localhost:3001/employees')
            .then(res => { setEmployees(res.data) });

    })

    const updateAll = (id) => {
        Axios.put('http://localhost:3001/update', { name: newName, age: newAge, country: newCountry, position: newPosition, wage: newWage, date_hired: newDateHired, id: id })
            .then((response => {
            }))
    }
    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
    }
    return (
        <Grid container xs={12} spacing={0} display='flex' direction="row" alignItems='center' sx={{ minHeight: '50vh', pt: '7rem' }}>
            {employees.map((employee) =>
            (
                <Grid item md={3} lg={2} xs={6}>
                    <Card sx={{ maxWidth: 345, m: '1rem', mb: '3rem' }}>
                        <CardMedia
                            component="img"
                            height="270"
                            image={eimage}
                        />
                        <CardContent sx={{ backgroundColor: '#1a1a1a', color: 'white' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {employee.name}, {employee.age}
                            </Typography>
                            <Typography variant="body2">
                                {employee.position}, {employee.wage} €
                            </Typography>
                            <Typography variant="body2">
                                {employee.country}
                            </Typography>
                            <Typography variant="body2">
                                Hired {employee.date_hired}
                            </Typography>
                            <Box sx={{ textAlign: 'left', mt: '1rem' }}>
                                <Input placeholder=" Name" sx={{ p: '5px', color: 'white', border: '1px solid white', width: '50%' }} onChange={(e) => setNewName(e.target.value)}></Input>
                                <Input placeholder=" Age" sx={{ p: '5px', color: 'white', border: '1px solid white', width: '50%' }} onChange={(e) => setNewAge(e.target.value)}></Input>
                                <Input placeholder=" Country" sx={{ p: '5px', color: 'white', border: '1px solid white', width: '50%' }} onChange={(e) => setNewCountry(e.target.value)}></Input>
                                <Input placeholder=" Position" sx={{ p: '5px', color: 'white', border: '1px solid white', width: '50%' }} onChange={(e) => setNewPosition(e.target.value)}></Input>
                                <Input placeholder=" Wage" sx={{ p: '5px', color: 'white', border: '1px solid white', width: '50%' }} onChange={(e) => setNewWage(e.target.value)}></Input>
                                <Input placeholder=" Date Hired" sx={{ p: '5px', color: 'white', border: '1px solid white', width: '50%' }} onChange={(e) => setNewDateHired(e.target.value)}></Input>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button sx={{ color: 'white', mt: '5px' }} onClick={() => { updateAll(employee.id) }}>Update</Button>
                                    <Button sx={{ color: 'white', mt: '5px' }} onClick={() => { deleteEmployee(employee.id) }}>Delete</Button>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default Employees
