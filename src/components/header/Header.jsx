import React from 'react'
import Navbar from './Navbar'
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core'

export default function Header () {
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
                    <Button>Login</Button>
                </Toolbar>
            </AppBar>

            {/* <div className="box box_header box_header-img">
                <img src="https://via.placeholder.com/128png" alt=""/>
            </div>
            <div className="box box_header box_header-title">
                <h1>Title</h1>
            </div>
            <Navbar /> */}
        </header>
    )
} 