import { AppBar, Box, Button, Drawer, IconButton, styled, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import './styles/Nav.css';

const NavButton = styled(Button)(
    {
        color: 'white',
        '&:hover': {
            color: 'lightgray',
            background: 'transparent',
        }
    }
)

const Navbar = () => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const [show, setShow] = useState(false);
    const controlNavbar = () => {
        if (window.scrollY > 500) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [])

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Drawer anchor='right' open={isOpen} onClose={() => setIsOpen(false)}>
                <Box sx={{
                    width: '400px',
                    backgroundColor: '#1a1a1a',
                    height: '100%',
                    padding: '20px',
                }}>
                    <Typography variant='h6' textAlign='center' role='presentation' >
                        <Stack direction='column' spacing={2} sx={{ fontWeight: '' }}>
                            <NavButton sx={{ color: 'white', textTransform: 'lowercase', fontWeight: 'bold' }} href='/' disableRipple>home</NavButton><hr />
                            <NavButton sx={{ color: 'white', textTransform: 'lowercase', fontWeight: 'bold' }} href='/about' disableRipple>about</NavButton><hr />
                            <NavButton sx={{ color: 'white', textTransform: 'lowercase', fontWeight: 'bold' }} href='/employees' disableRipple>employees</NavButton><hr />
                        </Stack>
                    </Typography>
                </Box>
            </Drawer>
            {
                isMatch ?
                    <AppBar position='fixed' sx={{ background: 'transparent', boxShadow: 'none' }}>
                        <Toolbar className={show ? 'appbar active' : 'appbar'}>
                            <IconButton href='/'>
                                <NavButton
                                    disableRipple
                                    sx={{
                                        display: 'flex',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        transform: 'scale(1.2)',
                                        letterSpacing: '2px'
                                    }}
                                >Employee Management System </NavButton>
                            </IconButton>
                            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}></Typography>
                            <NavButton disableRipple onClick={() => setIsOpen(true)}><Typography sx={{ fontSize: '2.5rem' }}>≡</Typography>
                            </NavButton>
                        </Toolbar>
                    </AppBar >
                    : (
                        <AppBar position='fixed' sx={{ background: 'transparent', boxShadow: 'none' }}>
                            <Toolbar className={show ? 'appbar active' : 'appbar'}>
                                <IconButton href='/'>
                                    <NavButton
                                        disableRipple
                                        sx={{
                                            ml: 10,
                                            color: 'white',
                                            fontWeight: 'bold',
                                            transform: 'scale(1.2)',
                                            letterSpacing: '2px'
                                        }}
                                    >Employee Management System</NavButton>
                                </IconButton>
                                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}></Typography>
                                <Stack direction='row' spacing={2}>
                                    <NavButton href='/' disableRipple sx={{ fontWeight: 'bold', textTransform: 'lowercase', color: 'white' }}>home</NavButton>
                                    <NavButton href='/about' disableRipple sx={{ fontWeight: 'bold', textTransform: 'lowercase', color: 'white' }}>about</NavButton>
                                    <NavButton href='/employees' disableRipple sx={{ fontWeight: 'bold', textTransform: 'lowercase', color: 'white' }}>employees</NavButton>
                                </Stack>
                            </Toolbar>
                        </AppBar>
                    )}
        </div>
    )
}

export default Navbar
