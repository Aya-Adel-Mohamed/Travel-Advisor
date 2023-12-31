import React from 'react';
import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core';
import { Autocomplete } from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';
import Flight from '@material-ui/icons/Flight';
import useStyles from './styles';

const Header = ({ onPlaceChange, onLoad }) => {
    const classes = useStyles();
  return (
    <>
    <AppBar className='MuiAppBar-positionStatic'>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.title}>
                <Flight/>
                Travel Advisor</Typography>
            <Box display='flex'>
                <Typography variant='h6' className={classes.searchTitle}>Explore New Places</Typography>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChange}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder='Search ....' classes={{root: classes.inputRoot, input: classes.inputInput}}/>
                    </div>
                </Autocomplete>
            </Box>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header