import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core'

export default function Header () {
    // const Link1 = () => (<Link to='/'/>)
    return (
        <header>
            <AppBar position='sticky' color='primary'>
                <Toolbar>
                    <IconButton edge='start' aria-label='menu'>
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant='h3'>
                        Project
                    </Typography>
                    <Button component={Link} to='/'>Home</Button>
                </Toolbar>
            </AppBar>

        </header>
    )
} 